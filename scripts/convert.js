import * as fs from 'node:fs';//導入File
let list=
// fetch(`https://twland.ronny.tw/index/search?lands[]=`)
fs.readFile('../data/data1.csv','utf8', (err,data)=>{
    if (err) throw err;
    let S_data=data.split(',')
    console.log(S_data)
});

