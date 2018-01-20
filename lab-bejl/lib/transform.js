'use strict';

const Bitmap = require('./bitmap.js');

const validTransformations = [
  'neon',
  'invert',
  'black',
  'darkenDarks'
]

module.exports = function(bitmapData, transformation) {

  let err = !(bitmapData instanceof Bitmap) ? 'ERROR: file is not valid bitmap'
  : !(validTransformations.includes(transformation)) ? 'ERROR: transformation was not found'
  : null;
  if (err) {
    throw (err);
  }

  for ( let x = 0; x < bitmapData.pixelArray.length; x++ ) {
    bitmapData.pixelArray[x] = transformation === 'neon' ? bitmapData.pixelArray[x] - 100
    : transformation === 'invert' ? 255 - bitmapData.pixelArray[x]
    : transformation === 'black' ? 0
    : transformation === 'darkenDarks' && bitmapData.pixelArray[x] > 50 ? bitmapData.pixelArray[x] - 50
    : bitmapData.pixelArray[x] // stay the same if no changes
  }
  return bitmapData;
};
