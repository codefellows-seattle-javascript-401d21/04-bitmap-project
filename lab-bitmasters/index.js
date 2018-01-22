'use strict';

const fs = require('fs');
const Bmp = require('./lib/bitmap');
const transform = module.exports = {};

let type = process.argv[2];

transform.image = function() {
    fs.readFile('./__test__/asset/bitmap.bmp', (err, data) => {
        let bmp = new Bmp(data);
        
        if (type === 'reverse') { //flip horizontal and vertical
            bmp.pixelArray.reverse();
            // console.log(bmp.pixelArray);
        } else if (type === 'fliph') {
            let pixelArrayRows = [];
            for (let i = 0; i < 9900; i+=100){
                pixelArrayRows.push(bmp.pixelArray.slice(0+i, 99+i).reverse());
            }
            bmp.pixelArray = pixelArrayRows.join('');
        } else if (type === 'moreBlue') {
            for (let i = 0; i < bmp.colorTable.length/4; i++) {
                bmp.colorTable[i*4+4] = 255;
            }
        } else if (type === 'moreRed') {
            for (let i = 0; i < bmp.colorTable.length/4; i++) {
                bmp.colorTable[i*4+2] = 255;
            }
        } else {
            //no transform
        }
        

        fs.writeFile('./__test__/asset/bitmaprewrite.bmp', bmp.allData, (err) => {
            if (err) console.error(err);
            console.log('Image saved');
            console.log(bmp.allData);
        });
        // console.log(bmp.pixelArray);
        // console.log(bmp.colorTable);
    });
};

transform.image();