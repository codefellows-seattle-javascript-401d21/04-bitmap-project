'use strict';

const fs = require('fs');
const Bitmap = require('./bitmap.js');
const transform = require('./transform.js');
const reader = module.exports = {};


reader.readFile = function (transformation) {
  fs.readFile('../assets/bitmap.bmp', (err, data) => {
    if(typeof data !== 'string') return null;
    if (err) {
      console.error(err);
    }
    const bitmapData = new Bitmap(data);
    const transformed = transform(bitmapData, transformation);
    fs.writeFile('./limitedchange.bmp', transformed.allData, (err, data) => {
      if (err) {
        console.error(err);
      }
    });
  });
};

reader.readFile();
