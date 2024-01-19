const x = function () {};

if (x) {
  console.log('Điều này là truthy');
} else {
  console.log('Điều này là falsy');
}

console.log(Boolean(x));

// Cảnh báo về truthy và falsy
const children = 3;

// Kiểm tra giá trị 0 đánh dấu
if (children) {
  console.log(`Bạn có ${children} trẻ con`);
} else {
  console.log('Vui lòng nhập số lượng trẻ con');
}

// Giải pháp
if (!isNaN(children)) {
  console.log(`Bạn có ${children} trẻ con`);
} else {
  console.log('Vui lòng nhập số lượng trẻ con');
}

// Kiểm tra mảng rỗng
const posts = ['Bài viết 1'];

// Luôn luôn đúng ngay cả khi rỗng
if (posts) {
  console.log('Liệt kê bài viết');
} else {
  console.log('Không có bài viết nào để liệt kê');
}

// Giải pháp
if (posts.length > 0) {
  console.log('Liệt kê bài viết');
} else {
  console.log('Không có bài viết nào để liệt kê');
}

// Kiểm tra đối tượng rỗng
const user = {
  name: 'Brad',
};

// Luôn luôn đúng, ngay cả khi không có thuộc tính
if (user) {
  console.log('Liệt kê người dùng');
} else {
  console.log('Không có người dùng');
}

// Giải pháp
if (Object.keys(user).length > 0) {
  console.log('Liệt kê người dùng');
} else {
  console.log('Không có người dùng');
}

// So sánh lỏng (==)
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// So sánh nghiêm túc (===)
console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false
