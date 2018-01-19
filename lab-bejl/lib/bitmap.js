'use strict';

const bitmap = module.exports = {};

bitmap.breakIt = function(buffer) {
  const allData = buffer;
  const offset = allData.readUInt32LE(10);
  const pixelArray = allData.slice(54, offset);
  return pixelArray;
};

bitmap.fixIt = function(buffer) {
  
};
