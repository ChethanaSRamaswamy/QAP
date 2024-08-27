const db = require('../../utilities/db/mysql/mysql_provider');
const Util = require('../../utilities/util');
const FileDownload = require('../models/FileDownload');

class FileDownloadController {
  async insertDownloadDetails(
    fileType,
    fileName,
    operation,
    feature,
    region = ''
  ) {
    const { userId } = Util.getEnvironmentVariables();
    const params = [fileName, fileType, feature, region, operation, userId];

    const cSql = `insert into file_downloads (file_name, file_type, feature, 
    region_name, operation, downloaded_by) values (?, ?, ?, ?, ?, ?)`;

    await db.MySQLProvider.insertRecord(cSql, params);
    console.log('Logged in user: ', userId);
    db.MySQLProvider.disconnect();
  }

  async invalidateDownloads({ fileType, feature, region }) {
    const params = [fileType, feature];

    let cSql = `update file_downloads set is_outdated = 1 where 
    uploaded_on is null and is_outdated = 0 
    and file_type = ? and feature = ? `;

    if (region !== 'global') {
      cSql += ' and region_name in ( ? )';
      params.push([region, 'global']);
    }

    await db.MySQLProvider.insertRecord(cSql, params);
    db.MySQLProvider.disconnect();
  }

  async updateDownloadDetails(downloadId) {
    const { userId } = Util.getEnvironmentVariables();
    const params = [userId, downloadId];

    const cSql = `update file_downloads set uploaded_on = now(), 
    uploaded_by = ?, is_outdated = 1 where file_downloads_id = ?`;

    await db.MySQLProvider.insertRecord(cSql, params);
    db.MySQLProvider.disconnect();
  }

  async deleteDownloadDetails(downloadId) {
    const cSql = 'delete from file_downloads where file_downloads_id = ?';
    await db.MySQLProvider.executeQuery(cSql, [downloadId]);
    db.MySQLProvider.disconnect();
  }

  async fetchDownloadDetails(
    fileType = '',
    fileName = '',
    featureName = '',
    region = 'global',
    action = ''
  ) {
    const params = [];
    let qSql = `select file_downloads_id, file_name, file_type, feature, region_name, 
    operation, downloaded_on, downloaded_by, uploaded_on, uploaded_by, is_outdated
    from file_downloads where true`;
    // TODO: better to filter files yet to be uploaded - uploaded_on is null

    if (fileType !== '') {
      qSql += ' and file_type = ?';
      params.push(fileType);
    }

    if (fileName !== '') {
      qSql += ' and file_name = ?';
      params.push(fileName);
    }

    if (featureName !== '') {
      qSql += ' and feature = ?';
      params.push(featureName);
    }

    if (region !== '') {
      qSql += ' and region_name = ?';
      params.push(region);
    }

    if (action !== '') {
      qSql += ' and operation = ?';
      params.push(action);
    }

    qSql += ' order by downloaded_on desc';

    const results = await db.MySQLProvider.executeQuery(qSql, params);

    const fileDownload = [];

    for (let i = 0; i < results.length; i++) {
      const {
        file_downloads_id: fdId,
        file_name: fName,
        file_type: fType,
        feature,
        region_name: rName,
        operation,
        downloaded_on: downloadedOn,
        downloaded_by: downloadedBy,
        uploaded_on: uploadedOn,
        uploaded_by: uploadedBy,
        is_outdated: isOutdated,
      } = results[i];

      fileDownload.push(
        new FileDownload(
          fdId,
          fName,
          fType,
          feature,
          rName,
          operation,
          downloadedOn,
          downloadedBy,
          uploadedOn,
          uploadedBy,
          isOutdated
        )
      );
    }

    db.MySQLProvider.disconnect();

    return fileDownload;
  }
}

module.exports = FileDownloadController;
