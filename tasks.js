Promise.reject('a')
  .catch(p=>p+'b')
  .catch(p=>p+'c')
  .then(p=>p+'d')
  .then(p=>p+'f')
  .catch(p=>p+'h')
  .finally(p=>p+'e')
  .then(p=>console.log(p))
  
// abdf

console.log('1');

setTimeout(() => console.log('2'), 1);

let promise = new Promise((resolve) => {
  console.log('3');
  resolve();
});

promise.then(() => console.log('4'));

setTimeout(() => console.log('5'));

console.log('6');

//1 3 6 4 5 2

setTimeout(() => console.log('a'));

Promise.resolve()
  .then((first) => {
    console.log('first: ', first);
    return 'b';
  })
  .then((
    Promise.resolve().then((second) => {
      console.log('second: ', second);
      return 'c';
    })
  ))
  .then((third) => console.log('third: ', third));

console.log('d');

// d undefined undefined b a

let a = 5;

console.log(a);

setTimeout(() => {
  console.log(a);
  a = 10;
}, 0);

Promise.resolve().then(() => {
  console.log(a);
  a = 15;
})

console.log(a);

// 5 5 5 15