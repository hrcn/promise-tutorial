async function main() {
  let p = new Promise((resolve, reject) => {
    // resolve('ok');
    reject('error');
  })
  // 1. 右侧为 Promise
  let res = await p;

  // 2. 右侧为其他类型数据
  let res2 = await 20;
  
  // 3. Promise 为失败状态
  try {
    let res3 = await p;
  } catch(e) {
    console.log(error);
  }
  console.log(res3);
}

main();