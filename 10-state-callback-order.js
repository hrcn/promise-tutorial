let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 1000);
});

p.then(value => {
  console.log(value);
}, reason => {

})