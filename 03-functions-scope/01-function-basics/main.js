// Khai báo hàm
function sayHello() {
    console.log('Giao chào thế giới');
  }
  
  // Gọi hàm
  sayHello();
  
  // Khai báo hàm với tham số
  function add(num1, num2) {
    console.log(num1 + num2);
  }
  
  // Gọi hàm với đối số
  add(5, 10);
  

  
  // Trả về một giá trị
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Gán giá trị trả về vào biến
  const result = subtract(10, 2);
  
  console.log(result, subtract(20, 5));
  