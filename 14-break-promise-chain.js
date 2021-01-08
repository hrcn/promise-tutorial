let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok');
  }, 1000);
});
// log 111 only
p.then(value => {
  console.log(111);
  return new Promise(() => {});
}).then(value => {
  console.log(222);
}).then(value => {
  console.log(333);
}).catch(reason => {
  console.warn(reason); // no!
})