class AccessInformationModel {
  constructor(
    accessInformationId,
    brandId,
    displayName,
    username,
    password,
    securePassword,
    salt,
    iv,
    uploadedBy
  ) {
    this.accessInformationId = accessInformationId;
    this.brandId = brandId;
    this.displayName = displayName;
    this.username = username;
    this.password = password;
    this.securePassword = securePassword;
    this.salt = salt;
    this.iv = iv;
    this.uploadedBy = uploadedBy;
  }
}

module.exports = AccessInformationModel;
