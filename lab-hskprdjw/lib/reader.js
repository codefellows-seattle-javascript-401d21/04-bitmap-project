'use strict';

// read before doing anything!
// to run a test, navagate to the base file(lab-hskprdjw) and then run 'npm test' and it should build the file and do the tests
// you can also do the CLI by doing this "node index.js bitmap test randomImage"
// in that set up, change only the 'test' as its the NEW FILE NAME and "randomImage" to a new transform function.


const fs = require('fs');
const read = module.exports = {};


read.read = function(path, callback) {
  fs.readFile(path, (err, data) => {
    if(err) {
      console.error(err);
      return callback(err);
    }
    callback(null, data);
  });
};


read.write = function(newData, newFilePath, callback) {
  fs.writeFile(newFilePath, newData, (err) => {
    if(err) {
      console.error(err);
      return callback(err);
    }
    callback(null);
  });
};
