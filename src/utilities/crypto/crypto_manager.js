/* eslint-disable node/no-unsupported-features/node-builtins */
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const KEYLEN = 32;
const BYTESIZE = 16;

class CryptoManager {
  static encryptData = (text, encryptionKey) => {
    const salt = crypto.randomBytes(BYTESIZE); // Generate a random salt
    const key = crypto.scryptSync(encryptionKey, salt, KEYLEN);
    // IV - Initialization Vector
    const iv = crypto.randomBytes(BYTESIZE);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
      salt: salt.toString('hex'),
      iv: iv.toString('hex'),
      encrypted: encrypted,
    };
  };

  static decryptData = (encryptedData, salt, iv, encryptionKey) => {
    try {
      const bSalt = Buffer.from(salt, 'hex');
      const bIV = Buffer.from(iv, 'hex');
      const key = crypto.scryptSync(encryptionKey, bSalt, KEYLEN);

      const decipher = crypto.createDecipheriv(algorithm, key, bIV);

      let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    } catch (e) {
      if (e.message.includes('bad decrypt')) {
        throw new Error(
          `It seems that there is an issue with the provided encryption key. Please ensure that the key is correct and try again\n`
        );
      }
    }
  };
}

module.exports = CryptoManager;
