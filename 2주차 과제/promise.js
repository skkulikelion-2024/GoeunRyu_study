'use strict';
//상태: pending -> fulfiled / rejected
// producer vs consumer

/* producer */
//Promise를 만드는 순간 그 안의 executor 콜백함수가 실행
const promise = new Promise((resolve, reject) => {
  console.log('doing something...'); //네트워크 통신, 파일 읽기 등
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

/* consumer : then, catch, finally */
promise //
  .then(value => { // 정상 수행, resolve
    console.log(value);
  })
  .catch(error => { // 에러, reject
    console.log(error);
  })
  .finally(() => { // 결과에 상관없이 무조건 실행
    console.log('finally');
  });


  // 프로미스 체이닝
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2) //2
  .then(num => num * 3) //6
  .then(num => { // then은 값을 바로 전달하거나 프로미스를 전달가능
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 5
    });
  })
  .then(num => console.log(num));

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
// .then(hen => getEgg(hen)) 
// then에서 받아오는 value로 바로 다른 함수 하나를 호출할 때는 축약이 가능
  .then(getEgg) 
  .then(cook)
  .then(console.log)
  .catch(console.log); // 에러 처리
  