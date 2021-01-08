let p = new Promise((resolve, reject) => {
  // 1. 调用 resolve
  resolve('ok'); // pending => fulfilled / resolved
  // 2. 调用 reject
  reject('error'); // pending => rejected
  // 3. 抛出错误
  throw 'error';
})
