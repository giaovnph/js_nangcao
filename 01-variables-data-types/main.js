//------------------------------- 01-console-------------------------------
console.log("Vũ Ngọc Giao")

const agess = 19;
console.log("Tuổi:",agess)

console.group('simple');

console.error('Lỗi');

console.warn(' Cảnh báo');

console.groupEnd();



//------------------------------- 02-comments-shortcuts-------------------------------
/*
console.log("Vũ Ngọc Giao")

const age = 19;
console.log("Tuổi:",age)

console.group('simple');

console.error('Lỗi');

console.warn(' Cảnh báo');
*/ 




//------------------------------- 03-variables-------------------------------
let firstName = 'Vũ ';
const lastName = 'Ngọc Giao';
console.log(age);
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
const person = {
  name: 'Vũ',
};
person.name = 'Giao';
person.email = 'giaovnph38004@fpt.edu.vn';
console.log(person);




//------------------------------- 04-data-types-------------------------------
// String
const Address = 'Thái Bình';
// Number
const year = 2004;
// Boolean
const Giao = true;
// Null
const aptNumber = null;
// Undefined
const score = undefined;
// Symbol
const id = Symbol('id');
// BigInt
const n = 9007199254740991n;
// Reference Types
const numbers = [1, 2, 3, 4];



//------------------------------- 05-stack-heap-------------------------------
const name = 'Giao';
const ages = 19;

const person = {
  name: 'Vũ',
  age: 20,
};

let newName = name;
newName = 'Giaodz';

let newPerson = person;
newPerson.name = 'Giaodzso1';

console.log(name, newName);
console.log(person, newPerson); 





//------------------------------- 06-type-conversion-------------------------------
let amount = 'Chào Giao';

amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

amount = amount.toString();
amount = String(amount);

amount = parseFloat(amount);

amount = Boolean(amount);

console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);
//------------------------------- 07-operators-------------------------------
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;


x = 'Hello' + ' ' + 'World';
x = 2 ** 3;
// x = x + 1;
x++;
// x = x - 1;
x--;



x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;
x = 2 == '2';
x = 2 === '2';
x = 2 != '2';
x = 2 !== 2;


x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);


//------------------------------- 08-type-coercion-------------------------------
let b;

// Ép kiểu thành chuỗi
b = 5 + '5';

b = 5 + Number('5');

// Ép kiểu thành số
b = 5 * '5';

// null được ép kiểu thành 0 vì nó là giá trị `falsy`
b = 5 + null;

b = Number(null);

b = Number(true);
b = Number(false);

// true được ép kiểu thành 1
b = 5 + true;

// false được ép kiểu thành 0 (giá trị `falsy`)
b = 5 + false;

// Undefined được ép kiểu thành 0 (giá trị `falsy`)
b = 5 + undefined;

console.log(b, typeof b);

//------------------------------- 09-strings-------------------------------
let a;

const names = 'Giao';
const age = 31;

a = `Hello, my name is ${names} and I am ${age} years old`;

// String Properties and Methods

const s = 'Hello World';

a = typeof s;
a = s.length;
a = s[0];
a = s.__proto__;

a = s.toUpperCase();
a = s.toLowerCase();

a = s.charAt(0);

a = s.indexOf('d');

a = s.substring(2, 5);
a = s.substring(7);

a = s.slice(-11, -6);

a = '         Hello World'.trim();

a = s.replace('World', 'Giao');

a = s.includes('Hellooo');

a = s.valueOf();

a = s.split('');

console.log(a);


// -------------------------------10-capitalize-challenge-------------------------------
const myString = 'Developer VNG';

let myNewString;

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
myNewString = myString[0].toUpperCase() + myString.substring(1);
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);

// -------------------------------11-numbers-------------------------------
let c;

const num = new Number(5);
c= num.toString();
c= num.toString().length;
c= num.toFixed(2);
c= num.toPrecision(3);
c= num.toExponential(2);
c= num.toLocaleString('en-US');
c= num.valueOf();
c= Number.MAX_VALUE;
c= Number.MIN_VALUE;

console.log(c);


// -------------------------------12-math-object-------------------------------
let q;

q = Math.sqrt(9);
q = Math.abs(-5);
q = Math.round(4.2);
q = Math.ceil(4.2);
q = Math.floor(4.9);
q = Math.pow(2, 3);
q = Math.min(4, 5, 3);
q = Math.max(4, 5, 3);
q = Math.random();
q = Math.floor(Math.random() * 100 + 1);

console.log(q);

// -------------------------------13-number-challenge-------------------------------
const g = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

const sum = g + y;
const sumOutput = `${g} + ${y} = ${sum}`;
console.log(sumOutput);

const diff = g - y;
const diffOutput = `${g} - ${y} = ${diff}`;
console.log(diffOutput);

const prod = g * y;
const prodOutput = `${g} * ${y} = ${prod}`;
console.log(prodOutput);

const quot = g / y;
const quotOutput = `${g} / ${y} = ${quot}`;
console.log(quotOutput);

const rm = g % y;
const rmOutput = `${g} % ${y} = ${rm}`;
console.log(rmOutput);


// -------------------------------14-dates-and-times-------------------------------
let d;

// Lấy thời gian hiện tại
d = new Date();
d = d.toString();

// Tạo đối tượng Date với ngày và giờ cụ thể
d = new Date(2024, 0, 10, 12, 30, 0);

// Tạo đối tượng Date từ chuỗi ngày tháng
d = new Date('2021-07-01T12:30:00');
d = new Date('07/01/2024 12:30:00');
d = new Date('2024-01-07');
d = new Date('07-01-2024');

d = Date.now();
d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1666962049745);

d = Math.floor(Date.now() / 1000);

console.log(d);




// -------------------------------15-date-object-methods-------------------------------
let i;
const h = new Date();

i = h.toString();
i = h.getTime();
i = h.valueOf();
i = h.getFullYear();
i = h.getMonth() + 1;
i = h.getDate();
i = h.getDay();
i = h.getHours();
i = h.getMinutes();
i = h.getSeconds();
i = h.getMilliseconds();
i = `${h.getFullYear()}-${h.getMonth() + 1}-${h.getDate()}`;

// Định dạng ngày tháng bằng các khu vực ngôn ngữ khác nhau
i = Intl.DateTimeFormat('vi-VN').format(h);
i = Intl.DateTimeFormat('vi-VN', { month: 'long' }).format(h);

// Định dạng ngày tháng với các tùy chọn cụ thể
i = h.toLocaleString('vi-VN', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Asia/Ho_Chi_Minh',
});

console.log(i);
