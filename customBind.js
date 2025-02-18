function customBind(func, context) {
  return function (...args) {
    return func.apply(context, args);
  }
}

function test() { console.log(this); };

const obj5 = { a: 1 };

const bindedFunction = customBind(test, obj5);

bindedFunction();
