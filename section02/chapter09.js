function add10(num){
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수
    // executor

    setTimeout(() => {     

      if(typeof num === 'number') {
        resolve(num + 10);
        return;
      } else{
        reject("num이 숫자가 아닙니다.");
      }    
    }, 2000);
  });
  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);  
  return add10(result);
})
.then((result2) => {
  console.log(result2);
  return add10(undefined);
})
.then((result3) => {
  console.log(result3);
}).catch((error) => {
  console.log(error);
});