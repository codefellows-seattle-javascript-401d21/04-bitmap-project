'use strict';


const fs = require('fs');
const Bmp = require('./bitmap');

const reading = module.exports = {};

reading.readWrite = function() {
  fs.readFile('../assets/bitmap.bmp', (err, data) => {
    if (err) {
      console.error(err);
    }
    let bmp = new Bmp(data);
    console.log('array',bmp.pixelArray.length);
    console.log('all', bmp.allData.length);
    // fs.writeFile('../assets/bitmapNew.bmp', data, err => err ? console.error(err) : undefined);
  });
};
