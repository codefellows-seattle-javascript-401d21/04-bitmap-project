'use strict';

const fs = require('fs');
const bitmap = require('./bitmap.js');
const transform = require('./transform.js');
const reader = module.exports = {};


reader.readFile = function () {
  fs.readFile('../assets/bitmap.bmp', (err, data) => {
    if (err) console.error(err);
    // console.log(data);
    const input = bitmap.breakIt(data);

    console.log(input.pixelArray);
    transform.black(input.pixelArray, (err,data) => {
      if (err) console.error(err);
      console.log(input);
    });
  });
};


reader.readFile();
