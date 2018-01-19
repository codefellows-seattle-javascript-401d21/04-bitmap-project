'use strict';

// const fs = require('fs');
// const Bmp = require('./bitmap');

// const read = module.exports = {};
const read = require('./reader');

read.readWrite();

// fs.readFile('../assets/bitmap.bmp', (err, data) => {
//   let bmp = new Bmp(data);
//
//   console.log('head',bmp.head.length);
//   console.log('array',bmp.pixelArray.length);
//   console.log('all', bmp.length);
//
// });
