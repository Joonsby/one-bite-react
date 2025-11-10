// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자: 현재 날짜와 시간
let date2 = new Date('1998/09/22/10:10:10'); // 생성자: 특정 날짜 (월은 0부터 시작)

// 2.타임 스탬프
// 특정 시간이 "1970년 1월 1일 00:00:00 UTC"로부터 몇 밀리초가 지났는지를 나타내는 숫자
let timestamp = date1.getTime();
let date4 = new Date(timestamp); // 1970년 1월 1일 00:00:00 UTC

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear(); // 연도
let month = date1.getMonth() +  1; // 월 (0부터 11까지)
let day = date1.getDate(); // 일

let hours = date1.getHours(); // 시
let minutes = date1.getMinutes(); // 분
let seconds = date1.getSeconds(); // 초

// console.log(`현재 날짜와 시간: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);

// 4. 시간 요소들을 설정하는 방법
date1.setFullYear(2025); // 연도 설정
date1.setMonth(11); // 월 설정 (0부터 11까지)
date1.setDate(25); // 일 설정
date1.setHours(15); // 시 설정
date1.setMinutes(30); // 분 설정
date1.setSeconds(45); // 초 설정
// console.log(`변경된 날짜와 시간: ${date1.getFullYear()}-${date1.getMonth() + 1}-${date1.getDate()} ${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`);

// 5. 시간을 여러 포맷으로 출력하기
console.log(`날짜 문자열: ${date1.toDateString()}`); // 날짜 문자열
console.log(`시간 문자열: ${date1.toLocaleString()}`); // 시간 문자열
console.log(`ISO 문자열: ${date1.toISOString()}`); // ISO 8601 형식 문자열