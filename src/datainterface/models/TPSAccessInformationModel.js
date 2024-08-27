class TPSAccessInformationModel {
  constructor({
    tpsAccessInformationId,
    toolName,
    displayName,
    username,
    password,
    securePassword,
    salt,
    iv,
    env,
    uploadedBy,
  }) {
    this.tpsAccessInformationId = tpsAccessInformationId;
    this.toolName = toolName;
    this.displayName = displayName;
    this.username = username;
    this.password = password;
    this.securePassword = securePassword;
    this.salt = salt;
    this.iv = iv;
    this.env = env;
    this.uploadedBy = uploadedBy;
  }
}

module.exports = TPSAccessInformationModel;
