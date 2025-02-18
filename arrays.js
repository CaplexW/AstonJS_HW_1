// - Создайте массив чисел и найдите его сумму разными способами.
// - Создайте массив строк и объедините их в одну строку разными способами.
// - Найдите максимальный и минимальный элементы в массиве чисел разными способами.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const sum1 = numArr.reduce((acc, item) => acc + item, 0);

let sum2 = 0;
for (let i = 0; i < numArr.length; i++) { sum2 += numArr[i]; }

const maxMin1 = (function (){ return [Math.max(...numArr), Math.min(...numArr)]; })();
const maxMin2 = numArr.toSorted((a, b) => b - a).filter((_, i) => i === 0 || i === numArr.length - 1);

const str1 = strArr.join('');
const str2 = strArr.reduce((acc, item) => acc + item, '');

console.log(sum1)
console.log(sum2)
console.log(maxMin1)
console.log(maxMin2)
console.log(str1)
console.log(str2)

// Делаем стек

const stack = {
  value: [],

  getValue: function () { return this.value; },
  addValue: function (value) { this.value.unshift(value); },
  takeValue: function () { this.value.shift(); },
};

console.log(stack.getValue());
stack.addValue(1);
console.log(stack.getValue());
stack.addValue(3);
console.log(stack.getValue());
stack.addValue(2);
console.log(stack.getValue());
stack.takeValue();
console.log(stack.getValue());

// Делаем очередь

const queue = {
  value: [],

  getValue: function () { return this.value; },
  addValue: function (value) { this.value.unshift(value); },
  takeValue: function () { this.value.pop(); },
}

console.log(queue.getValue());
queue.addValue(1);
console.log(queue.getValue());
queue.addValue(3);
console.log(queue.getValue());
queue.addValue(2);
console.log(queue.getValue());
queue.takeValue();
console.log(queue.getValue());
