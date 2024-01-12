let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// Lồng mảng
fruits.push(berries);
// Bây giờ chúng ta có thể truy cập 'blueberry' như sau
x = fruits[3][1];
// Tạo biến mới và lồng cả hai mảng
const allFruits = [fruits, berries];
x = allFruits[1][2];

// Nối các mảng
x = fruits.concat(berries);

// Toán tử spread (...) - Nối với
x = [...fruits, ...berries];

// Làm phẳng một mảng
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();


//Kiểm tra xem có phải là mảng không
x = Array.isArray(fruits);

// ạo một mảng từ một giá trị giống mảng
x = Array.from('12345');

// Tạo một mảng từ một tập hợp các giá trị
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);

console.log(x);
