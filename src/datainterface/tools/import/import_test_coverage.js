const Util = require('../../../utilities/util');
const db = require('../../../utilities/db/mysql/mysql_provider');
const Logger = require('../../../utilities/logger');
const importHelper = require('./import_helper');
const BrandController = require('../../controllers/BrandController');
const LocaleController = require('../../controllers/LocaleController');
const csv = require('csv-parser');
const fs = require('fs');

const { userId } = Util.getEnvironmentVariables();

const importTC = async ({ coverageInfo = [], quiet = false }) => {
  const warnMessages = [];
  console.log(`Importing test coverage details`);

  for (let i = 0; i < coverageInfo.length; i++) {
    const tc = coverageInfo[i];
    const brandPrefix = tc[0];
    const localePrefix = tc[1];
    const tag = tc[2];
    const isActive = tc[3];
    const isPC = tag.toLocaleLowerCase().includes('mob') ? 0 : 1;
    const brandId = tc[4];
    const localeId = tc[5];

    let params = [];
    let cSql = '';

    let qSql = `select feature_scenario_id from feature_scenarios
              where tag = ? and is_pc = ? and is_active = 1`;

    const featureScenarioId = await db.MySQLProvider.getValue(qSql, [
      tag,
      isPC,
    ]);
    if (featureScenarioId === null) {
      warnMessages.push(`Feature/Scenario mapping is missing for ${tag}`);
      continue;
    }

    Logger.log(`Importing ${brandPrefix} ${localePrefix} ${tag}`, quiet);

    qSql = `select test_coverage_id from test_coverage where
              brand_id = ? and locale_id = ? 
              and feature_scenario_id = ? and is_pc = ?`;
    params = [brandId, localeId, featureScenarioId, isPC];
    const tcId = await db.MySQLProvider.getValue(qSql, params);
    if (tcId !== null) {
      cSql = `update test_coverage set is_active = ?,
                modified_by = ?, modified_on = now() where test_coverage_id = ?`;
      params = [isActive, userId, tcId];
    } else {
      cSql = `insert into test_coverage (brand_id, locale_id,
                feature_scenario_id, is_pc, is_active, created_by)
                values (?, ?, ?, ?, ?, ?);`;
      params = [brandId, localeId, featureScenarioId, isPC, isActive, userId];
    }
    await db.MySQLProvider.insertRecord(cSql, params);
  }
  db.MySQLProvider.disconnect();
  console.log('Total tags imported: ', coverageInfo.length);
  if (warnMessages.length > 0) {
    console.log(Util.removeDuplicateEntries(warnMessages).join('\n'));
    process.exitCode = 1;
  }
};

const importTestCoverage = async (args) => {
  const { filepath, quiet = false } = args;

  const tcDetails = [];
  const errorMessages = [];
  const coverageInfo = [];
  const skipColumns = ['tt', 'BrandLocale'];

  const brands = await new BrandController().fetchBrands();
  const locales = await new LocaleController().fetchLocales();

  const indexBrands = importHelper.createLookup(
    brands,
    'brandPrefix',
    'brandId'
  );
  const indexLocales = importHelper.createLookup(
    locales,
    'localePrefix',
    'localeId'
  );

  fs.createReadStream(filepath)
    .pipe(csv())
    .on('data', async (row) => {
      tcDetails.push(row);
    })
    .on('end', async () => {
      for (let iCnt = 0; iCnt < tcDetails.length; iCnt++) {
        const row = tcDetails[iCnt];

        for (const [key, dataModifiedValue] of Object.entries(row)) {
          if (skipColumns.includes(key.trim())) {
            continue;
          }
          const [bPrefix, lPrefix] = key.split('-');
          const bId = importHelper.findIdByPrefix(bPrefix, indexBrands);
          const lId = importHelper.findIdByPrefix(lPrefix, indexLocales);

          if (bId === null) {
            errorMessages.push(`Brand '${bPrefix}' is missing in master`);
            continue;
          }

          if (lId === null) {
            errorMessages.push(`Locale '${lPrefix}' is missing in master`);
            continue;
          }

          const dataKey = row['BrandLocale']?.trim();

          const dataNewValue = dataModifiedValue.trim();

          if (dataKey.includes('spec_')) {
            const tag = dataKey.split('_')[1]?.toUpperCase();
            coverageInfo.push([
              bPrefix,
              lPrefix,
              tag,
              parseInt(dataNewValue),
              bId,
              lId,
            ]);
            continue;
          }
        }
      }

      if (errorMessages.length > 0) {
        console.log(Util.removeDuplicateEntries(errorMessages).join('\n'));
      }

      if (coverageInfo.length > 0) {
        // Importing test coverage details
        await importTC({ coverageInfo, quiet });
      }
    })
    .on('error', function (error) {
      db.MySQLProvider.disconnect();
      console.log(error.message);
    });
};

module.exports = importTestCoverage;
