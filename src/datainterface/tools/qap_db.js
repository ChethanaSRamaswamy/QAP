const fs = require('fs');
const db = require('../../utilities/db/mysql/mysql_provider');
const path = require('path');
const Util = require('../../utilities/util');
const myArgs = process.argv.slice(2);
const cliArgs = Util.getCommandLineArgs(myArgs);
const isLive = Util.isExecutedFromCI();

const init = async () => {
  // node qap_db.js --method "init"
  const cSql = `CREATE TABLE migrations (
               id int PRIMARY KEY AUTO_INCREMENT,
               filename varchar(255) NOT NULL,
               executed INT
               ) ENGINE=InnoDB`;

  try {
    await db.MySQLProvider.executeQuery(cSql, [], false);
    console.log('Migration table created successfully');
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log(
        "Table 'migrations' already exists, proceeding with executing the migrations"
      );
    }
  }

  db.MySQLProvider.disconnect();
};

const refresh = async () => {
  // init();

  // node qap_db.js --method "refresh"
  let errorMessages = [];
  const qSql = `select * from migrations`;

  const dir = path.resolve(__dirname, '../migrations');
  const files = fs.readdirSync(dir);
  const processedFiles = await db.MySQLProvider.executeQuery(qSql, []);
  let noQuery = true;

  for (const nFile of files) {
    let isFileExecuted = false;
    for (const pFile of processedFiles) {
      if (pFile.filename === nFile && pFile.executed === 1) {
        console.log(`The migration file ${nFile} has already been executed`);
        isFileExecuted = true;
        process.exitCode = 1;
        break;
      }
    }
    if (isFileExecuted) {
      continue;
    }
    noQuery = false;

    const fullPath = path.join(dir, nFile);
    const data = fs.readFileSync(fullPath, { encoding: 'utf8' });

    console.log(`Executing ${nFile}`);
    const queries = data.split(';');

    // DUAL is a way to ignore executing migrations on prod
    const canIgnore =
      data.includes('SELECT CURDATE() FROM DUAL') && isLive ? true : false;
    for (let iCnt = 0; iCnt < queries.length; iCnt++) {
      const cSql = queries[iCnt].trim();
      if (canIgnore || cSql === '') {
        continue;
      }

      try {
        await db.MySQLProvider.executeQuery(cSql, [], false);
      } catch (error) {
        errorMessages.push(error);
      }
    }
    const csql = `insert into migrations (filename, executed) values (?, ?)`;
    await db.MySQLProvider.executeQuery(csql, [nFile, 1], false);

    if (errorMessages.length === 0) {
      console.log('All queries were executed successfully');
    } else {
      console.log('There was an error during the execution of the queries:');
      console.log(errorMessages.join('\n'));
      process.exitCode = 1;
    }
    errorMessages = [];
  }
  db.MySQLProvider.disconnect();
  if (noQuery) {
    console.log('All migration files have already been executed');
    process.exitCode = 1;
  }
};

const createNewMigration = async () => {
  // node qap_db.js --method "new"
  const dir = path.resolve(__dirname, '../migrations');
  const fileName = `migration_${Date.now()}.sql`;
  const filePath = `${dir}/${fileName}`;
  fs.writeFileSync(filePath, '', {
    encoding: 'utf8',
  });
  console.log('A new migration file is created successfully: ', filePath);
};

if (cliArgs.method === 'refresh') {
  refresh();
}

if (cliArgs.method === 'new') {
  createNewMigration();
}

if (cliArgs.method === 'init') {
  init();
}
