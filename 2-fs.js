const fs = require('fs');

let p = new Promise((resolve, reject) => {
  fs.readFile('./resource/content.txt', (err, data) => {
    if (err) reject(err);
    resolve(data);
  })
})

p.then(data => {
  console.log(data.toString());
}, err => {
  console.log(err);
});