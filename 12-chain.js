let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok');
  }, 1000);
});

p.then(value => {
  return new Promise((resolve, reject) => {
    resolve('success');
  });
}).then(value => {
  console.log(value); // success
}).then(value => {
  console.log(value); // undefined
})