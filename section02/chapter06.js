// 1. map
// 배열의 모든 요소를 순회하며 콜백함수를 실행한 후
// 콜백함수의 반환값들로 이루어진 새로운 배열을 반환한다.
let arr = [1, 2, 3];
let doubled = arr.map(function (value) {
  return value * 2;
});
console.log(doubled); // [2, 4, 6]

let arr1 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

let names = arr1.map((item) => item.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// 2. sort
// 배열의 요소들을 정렬한다.
// 기본적으로 문자열 유니코드 코드 포인트 순서에 따라 정렬한다.
let arr2 = [10, 3 ,5];
arr2.sort((a,b)=>{
  if(a > b){
    // a가 b 앞에 와라
    return -1;
  } else if(a < b){
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // 순서 유지
  }
});
console.log(arr2); // [10, 5, 3]

// 3. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr3 = ["c", "a", "b"];
let sorted = arr3.toSorted();
console.log(sorted); // ['a', 'b', 'c']

// 4. join
// 배열의 모든 요소를 문자열로 변환한 후
// 지정한 구분자(기본값은 쉼표)로 연결한 하나의 문자열을 반환한다.
let arr4 = ['Hello', 'World', '2024'];
let result = arr4.join(' ');
console.log(result); // 'Hello World 2024'