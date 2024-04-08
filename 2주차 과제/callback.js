'use strict';

// JavaScript는 원래 동기적 : 요청의 응답을 받으면 다음을 실행, 코드의 순차적 작동
// hoisting -> var, 함수 정의를 맨 위로 올려준다.
console.log('1');
setTimeout(() => console.log('2'), 1000); 
// 특정 코드가 원하는 때에 동작을 시작하도록 하는 브라우저 API (2초 후에 실행)
console.log('3');

// 콜백함수 : 다른 함수에 전달되어 호출되는 함수
// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

/*콜백지옥 : 함수를 매개변수로 전달할 수 있는 JS의 특성 때문에, 콜백 내부에서 계속해서
콜백함수를 불러오는 콜백지옥이 발생할 수 있다. */

class UserStorage {
  loginUser(id, password, onSuccess, onError) {  
    //1. 사용자가 id, pw를 입력하면 2. 서버에 전송해서 로그인
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }
//3. 로그인시 서버가 반환한 id를 이용해 4. 이름 name과 역할 role을 받아오기
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}
//문제점 : 코드가 복잡하고 가독성이 떨어진다.
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passrod');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);