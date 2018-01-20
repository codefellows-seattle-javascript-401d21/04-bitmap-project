'use strict';

module.exports = function(bitmapData, transformation) {
  for ( let x = 0; x < bitmapData.pixelArray.length; x++ ) {
    bitmapData.pixelArray[x] = transformation === 'neon' ? bitmapData.pixelArray[x] - 100
    : transformation === 'invert' ? 255 - bitmapData.pixelArray[x]
    : transformation === 'black' ? 0
    : transformation === 'darkenDarks' && bitmapData.pixelArray[x] > 50 ? bitmapData.pixelArray[x] - 50
    : bitmapData.pixelArray[x] // stay the same if no changes
  }
  return bitmapData;
};

// transform.darkenDarks = function(input) {
//   for ( let x = 0; x < input.pixelArray.length; x++ ) {
//     if ( input.pixelArray[x] > 50 ) {
//       input.pixelArray[x] = input.pixelArray[x] - 50;
//     }
//   }
//   return input;
// };
// transform.neon = function(input) {
//   for ( let x = 0; x < input.pixelArray.length; x++ ) {
//     input.pixelArray[x] = input.pixelArray[x] - 100;
//   }
//   return input;
// };
// transform.invertColors = function(input) {
//   for ( let x = 0; x < input.pixelArray.length; x++ ) {
//     input.pixelArray[x] = 255-input.pixelArray[x];
//   }
//   return input;
// };
// transform.noise = function(input) {
//   for ( let x = 0; x < input.pixelArray.length; x++ ) {
//     input.pixelArray[x] = 255-input.pixelArray[x];
//   }
//   return input;
// };
// transform.black = function(input) {
//   for ( let x = 0; x < input.pixelArray.length; x++ ) {
//     input.pixelArray[x] = 0;
//   }
//   return input;
// };
