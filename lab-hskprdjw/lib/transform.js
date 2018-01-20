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

transform.randomImage = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i++) {
    bmp.pixelArray[i] = Math.floor(Math.random() * (32 - 0) + 0);
  }
  callback(null, bmp);
};

transform.removesColors = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i += 4) {
    bmp.pixelArray[i] = bmp.pixelArray[i + 2];
    bmp.pixelArray[i + 1] = bmp.pixelArray[i + 2];
  }
  callback(null, bmp);
};

transform.removeBlue = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i += 4) {
    bmp.pixelArray[i] = bmp.pixelArray[i + 1];
    bmp.pixelArray[i + 1] = bmp.pixelArray[i + 1];
  }
  callback(null, bmp);
};

transform.boostBlue = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i +=4) {
    bmp.pixelArray[i] = 255;
  }
  callback(null, bmp);
};

transform.boostGreen = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i +=4) {
    bmp.pixelArray[i + 1] = 255;
    // console.log(bmp.pixelArray);
  }
  callback(null, bmp);
};

transform.boostRed = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i +=4) {
    bmp.pixelArray[i + 2 ] = 255;
  }
  callback(null, bmp);
};

transform.testAlpha = function(bmp, callback) {
  for(let i = 0; i < bmp.pixelArray.length; i +=4) {
    bmp.pixelArray[i + 5 ] = 0.1;
  }
  callback(null, bmp);
};

transform.mirror = function(bmp, callback) {
  let mirror = [];
  let height = bmp.height;
  let width = bmp.width;
  let merged = [];

  for(let i = 0; i < height; i += width) {
    let row = bmp.pixelArray.slice(0, width - 1).reverse();
    mirror.push(row);
    merged = [].concat(...mirror)
    console.log('mirror array section', row);
  }
  bmp.pixelArray = merged;
  callback(null, bmp);
};
