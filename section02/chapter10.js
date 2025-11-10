// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 promise를 반환하도록 변환해주는 그런 키워드

async function getData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name : 'Mike',
        id : "proposeking"
      });
    }, 1500);
  });
}

console.log(getData());

// await
// async 함수 내부에서만 사용 가능
// promise가 처리될 때까지 기다렸다가 처리된 이후의 값을 반환
async function printData(){
  const data = await getData();
  console.log(data);
}