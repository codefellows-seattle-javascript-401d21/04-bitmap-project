'use strict';

const reader = require ('../lib/reader.js');

describe('Reader Module', function() {
  describe('#reader', function() {
    it(`should return an error if original file is not .bmp`, () => {
      function ender(){
        reader.readFile('./assets/bitmap.js','darkenDarks','./assets/test.bmp');
      }
      expect(ender).toThrow();
    });
    it('should return an error if transform type does not exist', (done) => {
      function errorTransform(){
        reader.readFile('./assets/bitmap.bmp','darkenDarkslll','./assets/test.bmp');
      }
      expect(errorTransform).toThrow();
      done();
    });
    it(`should return an error if destination file is not .bmp`, () => {
      function errorDestination(){
        reader.readFile('./assets/bitmap.js','darkenDarks','./assets/test.bmp');
      }
      expect(errorDestination).toThrow();
    });
  });
});
