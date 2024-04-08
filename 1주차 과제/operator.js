console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 
''''
1 + 2 = ${1 + 2}`);

//연산
console.log(1 + 1);
console.log(1 - 1); 
console.log(1 / 1); 
console.log(1 * 1); 
console.log(5 % 2); 
console.log(2 ** 3); 

//증감
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1 -> preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter -> counter = counter + 1
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

//할당
let x = 3;
let y = 6;
x += y; 
x -= y;
x *= y;
x /= y;

//비교
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//논리
const value1 = true;
const value2 = 4 < 2;

// || (or): true를 찾는대로 멈춤
// 따라서 복잡한 함수 호출은 뒤에 배치 권장
console.log(`or: ${value1 || value2 || check()}`);
// && (and): false를 찾는대로 멈춤
console.log(`and: ${value1 && value2 && check()}`);

/* nullableObject && nullableObject.something
nullableObject가 null이 아닐때만 something을 받아온다.*/

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not): 값을 반대로 변경
console.log(!value1);

//equality
const stringFive = '5';
const numberFive = 5;
// == loose equality: 타입 변경하여 검사
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality: type이 다르면 false
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference: 포인터개념과 유사
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

//조건: if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

console.log(name === 'ellie' ? 'yes' : 'no');

//Switch
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

//반복
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do~while: 블럭을 먼저 실행
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //괄호 안에서 지역변수 설정 가능
  console.log(`inline variable for: ${i}`);
}

//중첩반복
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
//0부터 10까지 홀수만 출력
console.log('문제1');
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;//다음으로 넘어감
  }
  console.log(`${i}`);
}

//숫자 8을 만나면 멈추기 
console.log('문제2');
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`${i}`);
}