const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// Xem chuỗi nguyên mẫu
console.log(socials.__proto__);

// Dạng dài
socials.forEach(function (item) {
  console.log(item);
});

// Dạng ngắn gọn
socials.forEach((item) => console.log(item));

// Cũng có thể truyền vào chỉ số và mảng gốc
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Sử dụng một hàm có tên
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Mảng của các đối tượng
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));
