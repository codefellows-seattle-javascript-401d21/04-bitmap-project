'use strict';

const fs = require('fs');
const transform = require('../index.js');
const bmp = require('../lib/bitmap.js');

require('jest');

describe('Transform Module', function(){
    describe('#none', () => {
        it('should read return null', (done) => {
            expect(transform.image('reverse')).toEqual('reverse');
            done();
            })
        })
    });

describe('Transform Module', function(){
    describe('#null', () => {
        it('should return null', (done) => {
            expect(transform.image()).toEqual(null);
            done();
            })
        })
    });
    
describe('Transform Module', function(){
    describe('#moreBlue', () => {
        it('should return input type', (done) => {
            expect(transform.image('moreBlue')).toEqual('moreBlue');
            done();
            })
        })
    });

describe('Transform Module', function(){
    describe('#fliph', () => {
        it('should return input type', (done) => {
            expect(transform.image('fliph')).toEqual('fliph');
            done();
            })
        })
    });
    
describe('Transform Module', function(){
    describe('#reverse', () => {
        it('should return input type', (done) => {
            expect(transform.image('reverse')).toEqual('reverse');
            done();
            })
        })
    });
