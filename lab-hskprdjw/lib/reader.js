'use strict';


const fs = require('fs');
const Bmp = require('./bitmap');
const trans = require('./transform.js');

const reading = module.exports = {};

reading.readWrite = function() {
  fs.readFile('../assets/bitmap.bmp', (err, data) => {
    if (err) {
      console.error(err);
    }
    let bmp = new Bmp(data);
    // console.log('start',bmp);

    // trans.reverseImage(bmp, (err, data) => {
    //   fs.writeFile('../assets/bitmapFlip.bmp', data.allData, err => err ? console.error(err) : undefined);
    // });
    // trans.randomImage(bmp, (err, data) => {
    //   fs.writeFile('../assets/bitmapRandom.bmp', data.allData, err => err ? console.error(err) : undefined);
    // });
    // trans.test(bmp, (err, data) => {
    //   fs.writeFile('../assets/bitmapTest.bmp', data.allData, err => err ? console.error(err) : undefined);
    // });
    trans.redChannel(bmp, (err, data) => {
      fs.writeFile('../assets/bitmapRed.bmp', data.allData, err => err ? console.error(err) : undefined);
    });
  });
};
