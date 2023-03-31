// this trong arrow function là this của block bên ngoài nó
// arrow funtion không có this nên sẽ các hàm call, apply, bind sẽ không hoạt động

function funcClassic() {
  // console.log("funcClassic() this :::", this);
}

function func() {
  const arrowFunc = () => {
    // console.log("arrowFunc() this :::", this);
  }
  arrowFunc()
}

funcClassic.call({ name: 'quang' })
// arrowFunc.bind({ name: 'quang' })
this.a = "a"
// console.log("this ::: ", this);

func()

//

function classicCallback() {
  console.log('classicCallback() run');
}

const arrowCallback = () => {
  console.log('arrowCallback() run');
}

function handlerCallback(cb) {
  cb()
}

handlerCallback(classicCallback)

handlerCallback(arrowCallback)


// currying function là hàm nhận vào 1 đối số và lồng các function bên trong và trả vè func con đó
const sum = a => b => c => a + b +c
console.log(sum(1)(2)(3));

// IIFE: Immediately Invoked function expression
// function thực thi ngay lập túc

(function(){})()