const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Tổng tất cả các số
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Sử dụng vòng lặp for
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

// Ví dụ về giỏ hàng (đối tượng)
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce((acc, product) => acc + product.price, 0);

console.log(total);
