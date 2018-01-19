'use strict';

const transform = module.exports = {};
const fs = require('fs');

transform.darkenDarks = function(input) {
  for ( let x = 0; x < input.pixelArray.length; x++ ) {
    if ( input.pixelArray[x] > 50 ) {
      input.pixelArray[x] = input.pixelArray[x] - 50;
    };
  };
  return input;
}
transform.neon = function(input) {
  for ( let x = 0; x < input.pixelArray.length; x++ ) {
      input.pixelArray[x] = input.pixelArray[x] - 100;
  };
  return input;
};
transform.invertColors = function(input) {
  for ( let x = 0; x < input.pixelArray.length; x++ ) {
      input.pixelArray[x] = 255-input.pixelArray[x];
  };
  return input;
};
transform.noise = function(input) {
  for ( let x = 0; x < input.pixelArray.length; x++ ) {
    input.pixelArray[x] = 255-input.pixelArray[x];
  };
  return input;
};
transform.black = function(input) {
  for ( let x = 0; x < input.pixelArray.length; x++ ) {
    input.pixelArray[x] = 0;
  };
  return input;
};
