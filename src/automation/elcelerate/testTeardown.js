const fs = require('fs');
const path = require('path');

module.exports = async function () {
  const directory = __dirname; //

  // Read the files in the directory
  fs.readdirSync(directory).forEach((file) => {
    // Check if the filename contains the word "screenshot"
    if (file.includes('screenshot')) {
      const filePath = path.join(directory, file);
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${file}`);
    }
  });
};
