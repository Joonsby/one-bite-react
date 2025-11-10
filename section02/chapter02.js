// 단락 평가 

function printName(person){  
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({name: "Bob"}); // Bob

// Truthy || Truthy -> 첫 번째 Truthy 반환
console.log("Hello" || "World"); // Hello 

// Truthy && Truthy -> 두 번째 값 반환
console.log("Hello" && "World"); // World