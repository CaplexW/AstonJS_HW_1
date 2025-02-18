// Задача №1

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger()
logger.apply(obj);
logger.call(obj);
const bindedLogger = logger.bind(obj);
bindedLogger();
logger()

// Задача №2

const obj1 = {
  a: 1,
  e: (function () {
      return () => {
          console.log(this.a);
      };
  })(),
};

obj1.e(); // undefiend
obj1.e.call({ a: 2 }); // undefiend

// Задача №3

const obj2 = {
  child: {
      i: 10,
      b: () => console.log(this.i, this),
      c() {
          console.log(this.i, this);
      },
  }
};

obj2.child.b(); // undefiend {}
obj2.child.c(); // 10 { i: 10, b: [Function: b], c: [Function: c] }

// Задача №4

function foo() {
   const x = 10;
   return {
       x: 20,
       bar: () => {
           console.log(this.x);
       },
       baz: function () {
           console.log(this.x);
       }
   };
}

const obj3 = foo();
obj3.bar(); // undefiend
obj3.baz(); // 20

const obj4 = foo.call({ x: 30 });

let y = obj4.bar; 
let z = obj4.baz; 
y();   // 30
z();   // undefiend

obj4.bar();    //  30
obj4.baz();    //  20