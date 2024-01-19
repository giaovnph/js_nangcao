// Cú pháp IIFE (Có phạm vi riêng và chạy ngay lập tức)
(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Xin chào từ IIFE');
    hello();
  })();
  
  // Tham số
  (function (name) {
    console.log('Xin chào ' + name);
  })('Shawn');
  
  // IIFE có tên (Chỉ có thể gọi đệ quy)
  (function hello() {
    console.log('Xin chào');
  })();
  