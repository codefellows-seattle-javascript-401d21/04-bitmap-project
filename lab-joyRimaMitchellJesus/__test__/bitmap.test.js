'use strict';

require('jest');
const bitmap = require('../lib/bitmap');
const fs = require('fs');

describe('Bitmap Module', () => {
  it('should translate the buffer data for the bitmap passed in from the input path via fs.readFile to human readable form', () => {
    fs.readFile('./asset/bitmap.bmp', (err, data) => {
      if (err) console.error(err);
      let bmp = new bitmap.bitmap(data);

      expect(bmp).not.toBeUndefined();
      expect(bmp).not.toBeNull();
      expect(typeof bmp).toBe('object');
      expect(typeof bmp.allData).toBe('object');
      expect(typeof bmp.allData.sig).toBe('string');
      expect(typeof bmp.fileSize).toBe('number');
      expect(typeof bmp.offset).toBe('number');
      expect(typeof bmp.width).toBe('number');
      expect(typeof bmp.height).toBe('number');
      expect(typeof bmp.pixelArray).toBe('object');
    });
  });
});