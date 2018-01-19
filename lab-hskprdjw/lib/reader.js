'use strict';


const fs = require('fs');
const Bmp = require('./bitmap')

const read = module.exports = {};

read.readWrite = function() {
  fs.readFile('../assets/bitmap.bmp', (err, data) => {
    console.log(data);
    if (err) {
      console.error(err);
    }
    Bmp.bitDo.buildObj(data);
    // fs.writeFile('../assets/bitmapNew.bmp', data, err => err ? console.error(err) : undefined);
  });
};

read.readWrite();
