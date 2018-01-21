'use strict';

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
