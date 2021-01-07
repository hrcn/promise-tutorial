const fs = require('fs');
const util = require('util');
// 返回一个新的函数
let myReadFile = util.promisify(fs.readFile);

myReadFile('./resource/content.txt').then(data => {
  console.log(data.toString());
});
