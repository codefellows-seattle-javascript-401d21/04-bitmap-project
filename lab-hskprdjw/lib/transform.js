'use strict';


const reading = module.exports = {};
// const Bmp = require('./bitmap');

reading.reverseImage = function(bmp, callback) {
  let test = bmp.pixelArray.reverse();
  bmp.pixelArray = test;
  // console.log(newImage);
  callback(null, bmp);
};

reading.randomImage = function(bmp, callback) {
  // console.log(bmp.pixelArray);
  let orginal = bmp.pixelArray;
  let food = [];
  for (let i = 0; i < 3; i++) {
    food = orginal.swap64();
  }
  bmp.pixelArray = food;
  callback(null, bmp);
};
