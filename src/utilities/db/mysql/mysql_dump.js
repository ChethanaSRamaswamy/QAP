const exec = require('util').promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');
const db = require('./mysql_provider');
const DBCDC = require('../../../datainterface/controllers/CDCController');
const mysqlConfig = require('./mysql_config');
const env = require('../../../configs/env');
const Util = require('../../../utilities/util');
const Helper = require('../../../utilities/helper');

// To copy mysqldump to Docker instance
// docker cp /usr/bin/mysqldump 596530c4cb79:/var/helix/db/qap-app/volume/src/utilities/db/mysql/
// sudo chown huser:huser mysqldump
const os = process.platform;
const MYSQL_HOST = mysqlConfig.mysql.host;
const MYSQL_PORT = mysqlConfig.mysql.port;
const MYSQL_USER = mysqlConfig.mysql.user;
const MYSQL_PASSWORD = mysqlConfig.mysql.password;
const DATABASE_NAME = mysqlConfig.mysql.database;
const archiveFile = 'qapdb.zip';
const sqlFilename = 'qapdb.sql';
const archivePath = path.resolve(__dirname, '../../../../db_backup/');
const zipFile = path.join(archivePath, archiveFile);
const unZipFile = path.join(archivePath, sqlFilename);
const mysqldump = `mysqldump`;
const mysqlClient = 'mysql';
let mdPath = '';
let mcPath = '';
let pwdFormat = `-p${MYSQL_PASSWORD}`;

/*
  Refer .env.example (.env file) to update MYSQLDUMP_UTILITY_PATH
*/
if (env.mysqldumpPath !== '') {
  mdPath = path.normalize(env.mysqldumpPath + '/');
  mcPath = mdPath;
}

if (os.includes('darwin')) {
  mdPath += mysqldump;
  mcPath += mysqlClient;
} else if (os.includes('win')) {
  mdPath += mysqldump;
  mcPath += mysqlClient;
} else if (os.includes('linux')) {
  mdPath = mysqldump;
  pwdFormat = `--password='${MYSQL_PASSWORD}'`;
}

async function flushTables() {
  // Flush the logs and tables

  let qSql = `FLUSH TABLES`;
  await db.MySQLProvider.executeQuery(qSql);

  qSql = `FLUSH BINARY LOGS`;
  await db.MySQLProvider.executeQuery(qSql);

  db.MySQLProvider.disconnect();
}

// node mysql_dump.js --method "getDatabaseBackup"
// node mysql_dump.js --method "getDatabaseBackup" --commit
// node mysql_dump.js --method "getDatabaseBackup" --revert
async function getDatabaseBackup(args) {
  const { commit, revert } = args;
  await flushTables();
  let compressCmd = '';

  if (revert) {
    try {
      const commitMsg =
        'Revert Automatically committed - Backup file for MySQL';
      const dir = `cd ${archivePath} && git checkout main qapdb.zip && git add qapdb.zip && git commit qapdb.zip -m "${commitMsg}" && git push origin HEAD`;
      await exec(dir);
      console.log('Reverted the backup file');
    } catch (e) {
      if (e.message.includes('Updated 0 paths from')) {
        console.log('Nothing to revert');
      } else {
        console.log(e);
      }
    }
    return;
  }

  console.log(
    `Backup started for database ${DATABASE_NAME} at ${new Date().toLocaleString()}`
  );

  const skipTables = [
    'migrations',
    'history_data_definitions',
    'history_locator_definitions',
    'file_downloads',
    'cms_head',
    'cms_notifications',
    'cms_run_log',
    // 'test_results'
  ];
  let ignoreTables = '';
  skipTables.forEach((tbl) => {
    ignoreTables += `--ignore-table=${DATABASE_NAME}.${tbl} `;
  });

  const backupFile = sqlFilename;

  const bkupStruct = `"${mdPath}" -h ${MYSQL_HOST} -P ${MYSQL_PORT} -u ${MYSQL_USER} ${pwdFormat} --databases ${DATABASE_NAME} --no-data ${DATABASE_NAME} > ${backupFile} && `;
  const bkupData = `"${mdPath}" -h ${MYSQL_HOST} -P ${MYSQL_PORT} -u ${MYSQL_USER} ${pwdFormat} ${DATABASE_NAME} ${ignoreTables} >> ${backupFile}`;

  const backupCommand = bkupStruct + bkupData;

  try {
    await exec(backupCommand);

    if (fs.existsSync(backupFile)) {
      console.log(
        `Backup for database ${DATABASE_NAME} successfully completed at ${new Date().toLocaleString()}`
      );
      if (fs.existsSync(zipFile)) {
        console.log('Deleting existing compressed file:', zipFile);
        fs.unlinkSync(zipFile);
      }

      if (os.includes('darwin')) {
        compressCmd = `zip ${zipFile} ${backupFile}`;
      } else if (os.includes('win')) {
        compressCmd = `powershell Compress-Archive -Force ${backupFile} ${zipFile}`;
        // && powershell Remove-Item -Force -Path ${backupFile}
      }

      if (compressCmd !== '') {
        await exec(compressCmd);
        console.log('Here is the compressed file:', zipFile);
        if (fs.existsSync(backupFile)) {
          console.log('Deleting .sql backup file:', backupFile);
          fs.unlinkSync(backupFile);
        }
        if (commit) {
          console.log('Committing the backup file: ', zipFile);
          const commitMsg = 'Automatically committed - Backup file for MySQL';
          const dir = `cd ${archivePath} && git add qapdb.zip && git commit qapdb.zip -m "${commitMsg}" && git push origin HEAD`;
          await exec(dir);
          console.log('Successfully committed the backup file');
        }
      }
    } else {
      throw new Error('Database backup failed');
    }
  } catch (e) {
    process.exitCode = 1;
    const missingDump =
      "'mysqldump' is not recognized as an internal or external command";
    if (e.message.includes(missingDump)) {
      console.log(
        'Not able to find mysqldump utility. Set MYSQLDUMP_UTILITY_PATH'
      );
      return;
    }
    console.log(e);
  }
}

const restoreProdDatabase = async () => {
  if (DBCDC.isTrackingEnabled()) {
    const msg = `Warning: Changes have been tracked.
      Restoring the backup will result in losing your changes.
      Do you want to continue? (Y/N): `;
    const confirmed = await Helper.hasUserConfirmed(msg);
    if (!confirmed) {
      console.log('Backup restoration aborted.');
      return;
    }
    // Since the user has decided to overwrite the local changes
    // its better to delete the tracking file
    DBCDC.deleteTrackerFile();
  }

  let uncompressCmd = '';

  console.log('Unzipping the archive');
  if (os.includes('darwin')) {
    const dirname = path.dirname(zipFile);
    const sourcePath = path.join(dirname, 'qapdb.zip');
    const destinationPath = dirname;
    await exec(`unzip ${sourcePath} -d ${destinationPath}`);
  } else if (os.includes('win')) {
    uncompressCmd = `powershell Expand-Archive -Path ${zipFile} -DestinationPath ${archivePath}`;
    await exec(uncompressCmd);
  }

  console.log('Restoring the backup');

  const restoreCmd = `"${mcPath}" -h ${MYSQL_HOST} -P ${MYSQL_PORT} -u ${MYSQL_USER} ${pwdFormat} < ${unZipFile}`;
  await exec(restoreCmd);

  fs.unlinkSync(unZipFile);

  console.log(
    'Successfully restored prod database in your local database server'
  );
};

const myArgs = process.argv.slice(2);
const cliArgs = Util.getCommandLineArgs(myArgs);

if (cliArgs.method === 'getDatabaseBackup') {
  getDatabaseBackup(cliArgs);
}

if (cliArgs.method === 'restoreProdDatabase') {
  restoreProdDatabase(cliArgs);
}
