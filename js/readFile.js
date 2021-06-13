const fs = require('fs')
fs.readFile('./a.js','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})