'use strict';

const fs = require('fs');
const Bitmap = require('./bitmap.js');
const transform = require('./transform.js');
const reader = module.exports = {};


reader.readFile = function () {
  fs.readFile('../assets/bitmap.bmp', (err, data) => {
    if (err) {
      console.error(err);
    };
    const input = new Bitmap(data);
    const transformed = transform.darkenDarks(input);
    fs.writeFile('./limitedchange.bmp', transformed.allData, (err, data) => {
      if (err) {
        console.error(err);
      };
    });
  });
};

reader.readFile();
