'use strict';

module.exports = function(buffer) {
  if (!(buffer instanceof Buffer)) {
    throw ('this is an error');
  }
  this.allData = buffer;
  this.offset = buffer.readUInt32LE(10);
  this.pixelArray = buffer.slice(54, this.offset);
  this.sig = buffer.toString('utf-8', 0, 2);
  this.width = buffer.readUInt32LE(18);
  this.height = buffer.readUInt32LE(22);
  this.length = buffer.length;
};

