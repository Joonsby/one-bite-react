// 1. 배열의 구조 분해 할당
let arr = [10, 20, 30];

let [one, two, three, four = 4] = arr;


// 2. 객체의 구조 분해 할당
let person = {
  name: 'Alice',
  age: 25,
  city: 'New York'  
};

let { name, age : myAge, city, extra = 'Unknown' } = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name,age,city,extra}) => {
  console.log(name, age, city, extra);
}

func(person);
