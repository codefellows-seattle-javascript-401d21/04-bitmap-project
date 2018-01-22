'use strict';

const fs = require('fs');
const build = require('../index');
const transform = require('../lib/transform');
const Bmp = require('../lib/bitmap');
const reading = require('../lib/reader');
require ('jest');


let startPath = `${__dirname}/../assets/bitmap.bmp`;
let newPath = `${__dirname}/../assets/changed.bmp`;
let testPath = `${__dirname}/../assets/bitmapTEST.bmp`;


describe('index.js module', function() {
  //these are good
  it('test to see if anything was passed into the function', (done) => {
    expect(build.buildImage()).toBe(null);
    done();
  });
  it('check to see if the right transform name is passed', (done) => {
    build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'remove']);
    expect(build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'remove'])).toBe('need to have the right transform name');
    done();
  });
  it('test to see if the read function worked and finished', (done) => {
    build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
    expect(build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue'])).toBe('file was writen');
    done();
  });
});

describe('read function module', function() {
  // //these are good
  it('test to see if a file is there that am calling to be referenced', (done) => {
    build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
    expect(fs.existsSync(startPath)).toBe(true);
    done();
  });
  it('test to see if a file is there that am calling to be referenced', (done) => {
    build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
    expect(fs.existsSync(testPath)).toBe(false);
    done();
  });
  it('test to see if anything was passed into the function', (done) => {
    expect(reading.read()).toBe(null);
    done();
  });
});

describe('write function module', function() {
  // //these are good
  it('test to see if a file was made and if it matches what i called it', (done) => {
    build.buildImage(['node', 'index.js', 'bitmap', 'changed', 'removeBlue']);
    expect(fs.existsSync(newPath)).toBe(true);
    done();
  });
  it('test to see if anything was passed into the function', (done) => {
    expect(reading.write()).toBe(null);
    done();
  });
});

describe('randomImage function', function() {
  it('test to see if the randomImage changes the pixelArray', (done) => {
    let testData = {pixelArray: Buffer.from('1c2c3c4c5c6c7c8c', 'hex')};
    transform.randomImage(testData, (err, data) => {
      expect(data.pixelArray.toString('hex')).not.toBe('1c2c3c4c5c6c7c8c');
      done();
    });
  });
  it('test to see if anything was passed into the function', (done) => {
    expect(transform.randomImage()).toBe(null);
    done();
  });
  it('test to see if anything was passed into the function', (done) => {
    expect(transform.reverseImage('string')).toBe(null);
    done();
  });
});


describe('reverseImage function', function() {
  it('test to see if the reverseImage changes the pixelArray', (done) => {
    let testData = {pixelArray: Buffer.from('1c2c3c4c5c6c7c8c', 'hex')};
    transform.reverseImage(testData, (err, data) => {
      expect(data.pixelArray.toString('hex')).toBe('8c7c6c5c4c3c2c1c');
      done();
    });
  });
  it('test to see if anything was passed into the function', (done) => {
    expect(transform.reverseImage()).toBe(null);
    done();
  });
  it('test to see if anything was passed into the function', (done) => {
    expect(transform.reverseImage('string')).toBe(null);
    done();
  });
});

describe('remove blue function', function(){
  it('should remove the blue from the color array', (done) =>{
    let testObj = {colorArray: Buffer.from('ff000000ff000000','hex')};
    transform.removeBlue(testObj, (err, data) => {
      expect(data.colorArray.toString('hex')).toEqual('0000000000000000');
      done();
    });
  });
  it('should take a valid input', (done) => {
    expect(transform.removeBlue('')).toBe(null);
    done();
  });
  it('should take an object with a colorArray property', (done) => {
    expect(transform.removeBlue({})).toBe(null);
    done();
  });
});

describe('boost blue function', function(){
  it('should boost the blue of the color array', (done) =>{
    let testObj = {
      colorArray: Buffer.from('ff000000ff000000','hex'),
    };
    transform.boostBlue(testObj, (err, data) => {
      expect(data.colorArray.toString('hex')).toEqual('c8000000c8000000');
      done();
    });
  });
  it('should take a valid input', (done) => {
    expect(transform.boostBlue('')).toBe(null);
    done();
  });
  it('should take an object with a colorArray property', (done) => {
    expect(transform.boostBlue({})).toBe(null);
    done();
  });
});

describe('Bmp.js module', function() {
  // //these are good
  it('test to see if the BMP makes an object with props', (done) => {
    let newTestBmp = new Bmp(fs.readFile(startPath, (err, data) => {return data;}));
    expect(!newTestBmp.pixelArray).toBe(true);
    done();
  });
  it('test to see if the BMP makes an object with props', (done) => {
    let newTestBmp = new Bmp(fs.readFile(startPath, (err, data) => {return data;}));
    expect(!newTestBmp.colorArray).toBe(true);
    done();
  });
  it('test to see if anything was passed into the function', (done) => {
    expect(Bmp()).toBe(null);
    done();
  });
});
