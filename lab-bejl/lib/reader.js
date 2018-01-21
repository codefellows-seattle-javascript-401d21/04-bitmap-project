'use strict';

const fs = require('fs');
const Bitmap = require('./bitmap.js');
const transform = require('./transform.js');
const reader = module.exports = {};

reader.readFile = function (path, transformation, destination) {
  let err = !(transform.validTransformations.includes(transformation)) ? 'ERROR: transformation was not found'
    : !(path.includes('bmp', (path.length - 3))) ? 'ERROR: please specify a valid .bmp file'
      : !(destination.includes('bmp', (destination.length - 3))) ? 'ERROR: please specify a valid destination .bmp file'
        : null;

  if (err) {
    throw (err);
  }
  if (typeof transformation !== 'string') return null;

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
    }
    const bitmapData = new Bitmap(data);
    const transformed = transform(bitmapData, transformation);
    fs.writeFile(destination, transformed.allData, (err, data) => {
      if (err) {
        console.error(err);
      }
      if (data) {
        console.log('success');
      }
    });
  });
  console.log(`Your transformed bitmap is located at ${destination}`);
};
