// Khai báo và khởi tạo đối tượng "person" với các thuộc tính
const firstName = 'Giao';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring thuộc tính đối tượng
const todo = {
  id: 1,
  title: 'Đổ rác',
  user: {
    name: 'Giao',
  },
};

const {
  id: todoId, 
  title,
  user: { name }, 
} = todo;

console.log(todoId);

// Destructuring mảng và sử dụng toán tử rest/spread
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);
