'use strict';

const Bitmap = require ('../lib/bitmap.js');
const realBuffer = Buffer.alloc(60, 1);
const validBitmap = new Bitmap(realBuffer);

describe(`bitmap module`, function() {
  describe(`#bitmap validation`, () => {
    it('should throw an error if invalid buffer', (done) => {
      function notBuffer(){
        Bitmap('not a buffer');
      }
      expect(notBuffer).toThrow(/error/);
      done();
    });


    it('should construct a new object', () => {
      expect(validBitmap).toBeInstanceOf(Object);
    });


    it('should export a new bitmap', () => {
      expect(validBitmap).toBeInstanceOf(Bitmap);
    });
  });
});