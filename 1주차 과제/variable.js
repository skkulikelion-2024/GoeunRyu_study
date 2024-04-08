'use strict';
console.log('Hello world');
let globalname = 'global name';
{
let name = 'ellie'
console.log(name);
name = 'hello';
console.log(name);
console.log(globalname);
}
console.log(name);
console.log(globalname);
//var는 블록 영역에 가둬둘 수 없고, hoisting이 가능하다. var 대신 let을 사용하기
//const: 값을 할당한 뒤에는 변경불가(=immutable) 
//let: 값을 할당한 뒤에도 변경가능 (=mutable)
const daysInweek = 7;
const maxNumber = 5;
//immutable: premitive types, frozen objects
//mutable: 자바스크립트의 모든 기본적 오브젝트

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 1234567890123456789012345678901234567890n;
//최근 추가됨, 사용권장X
console.log(`value: ${bigInt}, type: ${typeof bigINT}`);
Number.MAX_SAFE_INTEGER;

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //백틱을 이용해 스트링을 붙여서 출력가능
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

//boolean
//false: 0, null. undefined, NaN, ''
//나머지는 다 true
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

let nothing = null; //비어있는값
console.log(`value: ${nothing}, type: ${typeof nothing}`);
let x; //값이 지정되지 않음
console.log(`value: ${x}, type: ${typeof x}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
//주어지는 string에 상관없이 고유한 식별자를 만들때 사용
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//오브젝트: 오브젝트를 가리키는 레퍼런스가 메모리에 저장
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

let text = 'hello';
console.log(text.charAt(0)); //=h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; //string으로 자동형변환
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; //number로 자동형변환
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //type이 number로 바뀌었으므로 에러발생