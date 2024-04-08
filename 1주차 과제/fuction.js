// 자바스크립트에서 function은 오브젝트이다.
function printHello() {
    console.log('Hello');
  }
  printHello();
  
  function log(message) {
    console.log(message);
  }
  log('Hello@');
  log(1234);
  
  // 매개변수
  // primitive: 값을 전달 / object: 레퍼런스 전달
  function changeName(obj) {
    obj.name = 'coder';
  }
  const ellie = { name: 'ellie' };
  changeName(ellie);
  console.log(ellie); 
  
  //Default parameters
  function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');
  
  //Rest parameters 배열형태로 전달
  function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
  
    for (const arg of args) {
      console.log(arg);
    }
  
    args.forEach((arg) => console.log(arg));
  }
  printAll('dream', 'coding', 'ellie');
  
  //변수의 범위
  let globalMessage = 'global'; //전역변수
  function printMessage() {
    let message = 'hello';
    console.log(message); //지역변수
    console.log(globalMessage);
    function printAnother() {
      console.log(message);
      let childMessage = 'hello';
    }
    // console.log(childMessage) -> 에러발생
  }
  printMessage();
  
  //값을 return
  function sum(a, b) {
    return a + b;
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);
  
  //Early return, early exit
  //나쁜 예
  function upgradeUser(user) {
    if (user.point > 10) {
      // long upgrade logic...
    }
  }
  //좋은 예
  function upgradeUser(user) {
    if (user.point <= 10) {
      return;
    }
    // long upgrade logic...
  }
  
  const print = function () {
    //anonymous: 필요한 부분을 작성해서 변수에 할당
    console.log('print');
  };
  print();
  const printAgain = print;
  printAgain();
  const sumAgain = sum;
  console.log(sumAgain(1, 3));
  
  //Callback function: 함수를 매개변수로 할당
  function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
  }
  //anonymous function
  const printYes = function () {
    console.log('yes!');
  };
  
  //named function : 디버깅/재귀에 유용
  const printNo = function print() {
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);
  
  // Arrow function: 항상 anonymous
  const simplePrint = () => console.log('simplePrint!');
  const add = (a, b) => a + b; //화살표 이하를 return
  const simpleMultiply = (a, b) => {
    return a * b; //블럭을 사용할 때는 return 직접 입력
  };
  
  //IIFE: Immediately Invoked Function Expression
  (function hello() {
    console.log('IIFE');
  })(); //선언과 동시에 호출
  
  //퀴즈
  function calculate(command, a, b) {
    switch (command) {
      case 'add':
        return a + b;
      case 'substract':
        return a - b;
      case 'divide':
        return a / b;
      case 'multiply':
        return a * b;
      case 'remainder':
        return a % b;
      default:
        throw Error('unknown command');
    }
  }
  console.log(calculate('add', 2, 3));