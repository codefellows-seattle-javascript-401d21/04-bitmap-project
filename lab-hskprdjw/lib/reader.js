'use strict';


const fs = require('fs');
const Bmp = require('./bitmap');
const trans = require('./transform.js');

const reading = module.exports = {};

reading.readWrite = function(filenamein, filenameout, transform) {

  fs.readFile(`${filenamein}`, (err, data) => {
    if (err) {
      console.error(err);
    }
    let bmp = new Bmp(data);

    if (transform ==='reverseImage') {
      trans.reverseImage(bmp, (err, data) => {
        fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err) : undefined);
      });
    }

    if (transform ==='boostBlue') {
      trans.boostBlue(bmp, (err, data) => {
        fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err) : undefined);
      });
    }

    if (transform === 'removeBlue') {
      trans.removeBlue(bmp, (err, data) => {
        fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err): undefined);
      });
    }

    if (transform === 'randomImage') {
      trans.randomImage(bmp, (err, data) => {
        fs.writeFile(`${filenameout}`, data.allData, err => err ? console.error(err): undefined);
      });
    }
  });
};
