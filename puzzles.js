for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// что в консоли и в каком порядке?
// 3 3 3 0 1 2
// var у нас всплывает и из глобальной обласит мы забираем значение оставшееся посл последнего i++ которое равно 3.
// во втором цикле мы замыкаемся на локальную переменную.

Promise.resolve(1)
    .then((val) => {
        console.log(val); // 1
        return val + 1;
    })
    .then((val) => {
        console.log(val); // 2
    })
    .then((val) => {
        console.log(val); // undefined
        return Promise.resolve(3).then((val) => {
            console.log(val); // 3
        });
    })
    .then((val) => {
        console.log(val); // undefined
        return Promise.reject(4);
    })
    .catch((val) => {
        console.log(val); // 4
    })
    .finally((val) => {
        console.log(val); // undefined
        return 10;
    })
    .then((val) => {
        console.log(val); // undefined
    });
// что в консоли и в каком порядке?
// 1 2 undefined 3 undefined 4 undefined undefined

function F() {
  //?
}

const x = {}

F.prototype =  x; //что тут происходит? зачем?

const a = new F();

console.log(a.__proto__ === x) //?

// какой ответ? Почему?
// 

const user = {
  name: 'Bob',
  funcFunc() {
    return function() {
      console.log(this);
    }
  },
  funcArrow() {
    return () => {
      console.log(this);
    }
  },
  arrowFunc: () => {
    return function() {
      console.log(this);
    }
  },
  arrowArrow: () => {
    return () => {
      console.log(this);
    }
  },
};

user.funcFunc()(); // ? Window
user.funcArrow()(); // ? User
user.arrowFunc()(); // ? Window
user.arrowArrow()(); // ? Window

///////////////////////////////////

var a = 1;
var b = 2;

(function() {
    var b = 3;
    a += b;
})();

console.log(a);  //4
console.log(b);  //2
// что в консоли? почему так?
// Внутри функции мы определили новую переменную b и прибавили её значение к переменной а
// Переменную за пределами функции мы не тронули, поэтмоу её значение в консоли по прежнему 2.