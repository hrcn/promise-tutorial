let p = new Promise((resolve, reject) => {
  resolve('ok');
});
// ok, ok2
p.then(value => {
  console.log(value);
})
p.then(value => {
  console.log(value + '2');
})