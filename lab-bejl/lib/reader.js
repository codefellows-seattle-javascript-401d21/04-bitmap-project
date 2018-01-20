'use strict';

const fs = require('fs');
const Bitmap = require('./bitmap.js');
const transform = require('./transform.js');
const reader = module.exports = {};

reader.readFile = function (path, transformation, destination) {
  console.log(path, destination, transformation);

  let err = !(transform.validTransformations.includes(transformation)) ? 'ERROR: transformation was not found'
  : !(path.includes('.bmp', (path.length - 3))) ? 'ERROR: please specify a valid .bmp file'
  : !(destination.includes('.bmp', (destination.length - 3))) ? 'ERROR: please specify a valid destination .bmp file'
  : null;

  if (err) {
    throw (err);
  }
  if (typeof transformation !== 'string') return null;
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
    }
    // console.log();
    const bitmapData = new Bitmap(data);
    const transformed = transform(bitmapData, transformation);
    fs.writeFile(destination, transformed.allData, (err, data) => {
      if (err) {
        console.error(err);
      }
    });
  });
};

//reader.readFile(`${process.argv[2]}`, `${process.argv[3]}`, `${process.argv[4]}`);
// node index.js './assets/bitmap.bmp' 'black' './limitedchange.bmp'
