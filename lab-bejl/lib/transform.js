'use strict';

const transform = module.exports = {};

transform.black = function(pixelArray, callback) {
//   for (let x in pixelArray) {
//     pixelArray[x] = 0;
//   }
  for (const value of pixelArray.values()) {
    pixelArray[value] = 0;
    console.log(pixelArray[value]);
  }
  callback(null, pixelArray);
};

