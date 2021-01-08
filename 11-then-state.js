let p = new Promise((resolve, reject) => {
  resolve('ok');
});

let result = p.then(value => {
  // console.log(value);
  // 1. 抛出错误
  // throw 'error'; // PromiseState: "rejected", PromiseResult: "error"
  // 2. 返回类型是非 Promise 类型的对象
  // return 521; // PromiseState: "fulfilled", PromiseResult: 521
  // 3. 返回的结果是 Promise 对象
  return new Promise((resolve, reject) => {
    reject('no'); // PromiseState: "rejected", PromiseResult: "no"
  })
}, reason => {
  console.warn(reason);
})

console.log(result); // Promise 对象