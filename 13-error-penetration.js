let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok');
    // reject('error');
  }, 1000);
});

p.then(value => {
  // console.log(111);
  throw 'no!';
}).then(value => {
  console.log(222);
}).then(value => {
  console.log(333);
}).catch(reason => {
  console.warn(reason); // no!
})