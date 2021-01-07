const fs = require('fs');

function myReadFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

myReadFile('./resource/content.txt').then(data => {
  console.log(data.toString());
}, err => {
  console.log(err);
})