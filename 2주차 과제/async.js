async function fetchUser() {
    return 'ellie';
  } // function 앞에 async를 쓰면 코드블럭이 자동으로 프로미스로 변환됨
  
  const user = fetchUser();
  user.then(console.log);
  console.log(user);
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(2000);
    return '🍎';
  }
  
  /* function getBanana() {
    return delayA(3000)
    .then(() => '🍌')
  }  */
  async function getBanana() {
    await delay(1000);
    return '🍌';
  }
  
  /* function pickFruits() {
    return getApple().then(apple => {
      return getBanana().then(banana => `${apple} + ${banana}`);
    }) 프로미스 체이닝
  } */
  async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  }
  
  pickFruits().then(console.log);
  
  // 프로미스 API
  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
      fruits.join(' + ')
    );
  }
  pickAllFruits().then(console.log);
  
  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
  }
  
  pickOnlyOne().then(console.log);