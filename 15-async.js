async function main() {
  // 1. 返回值为非 promise 类型
  return 521; // log: fulfilled, 521
  // 2. 返回的是一个 promise 对象
  return new Promise((resolve, reject) => {
    resolve('ok');
    reject('err'); // log: rejected, err
  })
  // 3. 抛出异常
  throw 'oh no'; // log: rejected, oh no
}

let result = main();

console.log(result);