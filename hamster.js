function Hamster() {  }

Hamster.prototype.food = [ ]; // пустой "живот"

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();

console.log(speedy.food === lazy.food);

speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length); // 2
console.log(lazy.food.length);   // 2 (!??) // должно быть 0

// Дело в том, что через .prototype мы ссылаемся на один и тот же массив во всех экземплярах:
console.log(speedy.food === lazy.food) // true;

// Варианты решения:

// 1. Добавлять свойства и методы не прототипу, а эеземпляру.

function EmptyHamster() {  }

emptySpeedy = new EmptyHamster();
emptyLazy = new EmptyHamster();

emptySpeedy.food = [];
emptySpeedy.found = function(something) {
  this.food.push(something);
}

emptyLazy.food = [];
emptyLazy.found = function(something) {
  this.food.push(something);
}

emptySpeedy.found("яблоко");
emptySpeedy.found("орех");

console.log(emptySpeedy.food.length);
console.log(emptyLazy.food.length); 

// 2. Создавать свойства и методы в самой фунции.

function SpawnedHamster() { 
  this.food = [];
  this.found = function (finding) { this.food.push(finding); };
}

const speedyHamster = new SpawnedHamster();
const lazyHamster = new SpawnedHamster();

speedyHamster.found("яблоко");
speedyHamster.found("орех");

console.log(speedyHamster.food.length);
console.log(lazyHamster.food.length);

// 3. Создать класс через class.

class ClassedHamster {
  constructor(name = 'Безымянный хомяк') {
    this.name = name;
    this.food = [];
  }

  found(finding) { this.food.push(finding) }
};

const classedSpeedy = new ClassedHamster();
const classedJazy = new ClassedHamster();

classedSpeedy.found("яблоко");
classedSpeedy.found("орех");

console.log(classedSpeedy.food.length);
console.log(classedJazy.food.length);
