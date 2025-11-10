// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "치킨";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooledFood = `식은 ${food}`;
    callback(cooledFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const frozenFood = `얼린 ${food}`;
    callback(frozenFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooledFood) => {
    console.log(cooledFood);
    
    freezeFood(food, (frozenFood) => {
    console.log(frozenFood);
  })
  });  
});