// 1) Создать приватное поле в функции-конструкторе, создать геттер и сеттер для него.
class SomeClass {
  constructor() {}
  #privateField = "It's private!"

  getPrivate() { return this.#privateField; };
  setPrivate(newState) { this.#privateField = newState; };
}

const someInstance = new SomeClass();

console.log(someInstance.getPrivate());
someInstance.setPrivate("It's even more private!");
console.log(someInstance.getPrivate());

// 2) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;

function getSumPair(arr, target) {
  
}