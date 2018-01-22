'use strict';

require('jest');
const reader = require('../lib/reader');
const fs = require('fs');

describe('Reader Module', () => {
  it('should only take in string arguments', (done) => {
    expect(reader.read(222, 111, 333)).toEqual('ERROR: Invalid Input - only string inputs are accepted');
    done();
  });

  it('should log an error meesage on invalid input paths', (done) => {
    expect(reader.read('./floof/green.bmp', './asset/invert.bmp', 'invert')).toEqual('ERROR: Invalid Input Path');
    done();
  });

  it('should log an error message if output path folder does not exist', (done) => {
    expect(reader.read('./asset/bitmap.bmp', './crasset/invert.bmp', 'invert')).toEqual('ERROR: Invalid Output Path');
    done();
  });

  it('should log an error if an invalid transform name is input', () => {
    expect(reader.read('./asset/bitmap.bmp', './asset/invert.bmp', 'invertttttt')).toEqual('ERROR: Invalid Transform Name');
  });

  it('should write a new file to the output path', () => {
    expect(reader.read('./asset/bitmap.bmp', './asset/invertTest.bmp', 'invert')).toEqual('SUCCESS: Transformed file created');
    expect(fs.readFileSync('./asset/invertTest.bmp')).toBeTruthy();
  });
});
