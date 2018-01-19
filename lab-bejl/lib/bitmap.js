'use strict';

module.exports = function(buffer) {
  this.allData = buffer;
  this.offset = buffer.readUInt32LE(10);
  this.pixelArray = buffer.slice(54, this.offset);
};

