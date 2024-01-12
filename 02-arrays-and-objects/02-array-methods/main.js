let x;

const arr = [28, 38, 44, 29, 109];

// Thêm một giá trị vào cuối mảng
arr.push(100);

// Loại bỏ giá trị cuối cùng
arr.pop();

// Thêm một giá trị vào đầu mảng
arr.unshift(99);

// Loại bỏ giá trị đầu tiên
arr.shift();

// Đảo ngược mảng
arr.reverse();

// Kiểm tra xem một giá trị có trong mảng không
x = arr.includes(445);

// Trả về chỉ số của giá trị đầu tiên
x = arr.indexOf(28);

// Chuyển đổi mảng thành chuỗi
x = arr.toString();

// Lấy một phần của mảng nhưng không làm thay đổi mảng gốc
x = arr.slice(1, 4);

// Loại bỏ các phần tử từ mảng và làm thay đổi mảng gốc
x = arr.splice(1, 4);

// Loại bỏ một phần tử cụ thể và trả về một mảng mới
x = arr.splice(4, 1);

// Kết hợp các phương thức - Một số phương thức có thể được kết hợp tùy thuộc vào giá trị trả về.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);
