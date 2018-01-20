'use strict';

const Bitmap = require('../lib/bitmap');
const transform = require('../lib/transform');
require('jest');

const realBuffer = Buffer.alloc(60, 1);
const validBitmap = new Bitmap(realBuffer);

describe(`transform module`, function() {
  describe(`#input validation`, () => {
    it(`should accept 2 params`, () => {
      expect(transform.length).toBe(2);
    });
    it(`should throw if first parameter is not an instance of bitmap`, () => {
      function transformInvBitmap() {
        transform('not a bitmap', 'neon');
      };
      expect(transformInvBitmap).toThrow(/bitmap/);
    });
    it(`should throw if second parameter is not a valid transformation`, () => {
      function transformInvTransformation() {
        transform(validBitmap, 500);
      };
      expect(transformInvTransformation).toThrow(/not found/);
    });
  });
  describe(`#output validation`, () => {
    it(`should return valid bitmap`, () => {
      expect(transform(validBitmap, 'black')).toBeInstanceOf(Bitmap);
    });
  });
});
