class FileDownload {
  constructor(
    downloadId,
    fileName,
    fileType,
    feature,
    region,
    operation,
    downloadedOn,
    downloadedBy,
    uploadedOn,
    uploadedBy,
    isOutdated
  ) {
    this.downloadId = downloadId;
    this.fileName = fileName;
    this.fileType = fileType;
    this.feature = feature;
    this.region = region;
    this.operation = operation;
    this.downloadedOn = downloadedOn;
    this.downloadedBy = downloadedBy;
    this.uploadedOn = uploadedOn;
    this.uploadedBy = uploadedBy;
    this.isOutdated = isOutdated;
  }
}

module.exports = FileDownload;
