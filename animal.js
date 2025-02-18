class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);

// в чем ошибка? как исправить? Можно делать что угодно.

// Ошибка заключается в том, что в наследующемся компоненте отсутствует вызов super(),
// из-за чего родительский this не определен и JS не дает доступа к this дочернего компонента
// в следствии чего вызов конструктора приводит к ошибке.

// Т.к. эта логика уже реализована в родительском классе – можно решить это вызвав super() с аргументом name:

class Bear extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}
let bear = new Bear('Белый медведь');
alert(bear.name);

// Или просто вызвать super() не меняя подхода.

class BrownBear extends Animal {
  constructor() {
    super();
    this.name = 'Бурый медведь';
    this.created = Date.now();
  }
}

let brownBear = new BrownBear('Белый медведь'); // Рожденный бурым, белеть не может.
alert(brownBear.name);
