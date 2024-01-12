const numbers = [1, 2, 3, 4, 5];
const mixed = [0, 'Giao', true, null];
const fruits = ['Vu', 'Ngoc', 'Giao'];

let x;

x = numbers[0];
x = numbers[0] + numbers[3];
x = `My favorite fruit is an ${fruits[2]}`;
x = numbers.length;

fruits[2] = 'pear';
fruits.push('strawberry', 'blueberry', 'peach');

console.log(fruits);
