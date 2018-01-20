'use strict';


const transform = module.exports = {};
// const Bmp = require('./bitmap');

transform.reverseImage = function(bmp, callback) {
  let test = bmp.pixelArray.reverse();
  console.log('reversed pixel arry', test.length);
  bmp.pixelArray = test;
  // console.log(newImage);
  callback(null, bmp);
};

transform.removeBlue = function(bmp, callback) {
  let colorArray = bmp.colorArray;
  for(let i = 0; i < colorArray.length; i += 4) {
    colorArray[i] = 0;

  }
  bmp.colorArray = Buffer.from(colorArray);
  callback(null, bmp);
};

transform.boostBlue = function(bmp, callback) {
  let colorArray = bmp.colorArray;
  for(let i = 0; i < colorArray.length; i += 4) {
    colorArray[i] = 200;

  }
  bmp.colorArray = Buffer.from(colorArray);
  callback(null, bmp);
};

transform.randomImage = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i++) {
    bmp.pixelArray[i] = Math.floor(Math.random() * (32 - 0) + 0);
  }
  callback(null, bmp);
};
