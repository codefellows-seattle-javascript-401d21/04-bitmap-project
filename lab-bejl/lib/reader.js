'use strict';

const fs = require('fs');
const Bitmap = require('./bitmap.js');
const transform = require('./transform.js');
const reader = module.exports = {};


reader.readFile = function () {
  fs.readFile('../assets/bitmap.bmp', (err, data) => {
    if (err) console.error(err);
    // console.log(data);
    const input = new Bitmap(data);

    console.log(input.pixelArray);
    console.log(transform.black(input.pixelArray));
  });
};

reader.readFile();
