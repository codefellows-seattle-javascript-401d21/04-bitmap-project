'use strict';

const fs = require('fs');
const Bmp = require('./bitmap');

fs.readFile('../assets/bitmap.bmp', (err, data) => {
  let bmp = new Bmp(data);
  // console.log(bmp);

  console.log('this is length', bmp.pixelArray.length);
});
