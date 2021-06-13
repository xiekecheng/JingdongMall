'use strict'
const {
    writeFile
} = require('fs')
const data = 'Hello Node.js!!!!'
writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('the file has been saved!');
})