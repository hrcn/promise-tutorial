const fs = require('fs');
// promisify fs.readFile 方法
const util = require('util');
const myReadFile = util.promisify(fs.readFile);

// 回调函数形式
fs.readFile('./resource/1.html', (err, data1) => {
  if (err) throw err;
  fs.readFile('./resource/2.html', (err, data2) => {
    if (err) throw err;
    fs.readFile('./resource/3.html', (err, data3) => {
      if (err) throw err;
      console.log(data1 + data2 + data3);
    })
  })
})

// async 与 await 形式
async function main() {
  try {
    let data1 = await myReadFile('./resource/1.html');
    let data2 = await myReadFile('./resource/2.html');
    let data3 = await myReadFile('./resource/3.html');
    console.log(data1 + data2 + data3);
  } catch(e) {
    console.error(e);
  }
};

main();