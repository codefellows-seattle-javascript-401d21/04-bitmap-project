'use strict';

const transform = module.exports = {};

transform.black = function(pixelArray) {
  for (let x in pixelArray) {
    pixelArray[x] = 0;
  }
  return pixelArray;
};
