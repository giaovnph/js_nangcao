const add = (a, b) => {
    return a + b;
  };
  
  // Return ngầm định
  const subtract = (a, b) => a - b;
  
  // Có thể bỏ () với một tham số
  const double = a => a * 2;
  
  // Trả về một đối tượng
  const createObj = () => ({
    name: 'Brad',
  });
  
  const numbers = [1, 2, 3, 4, 5];
  
  numbers.forEach(function (n) {
    console.log(n);
  });
  
  // Arrow function trong một callback
  numbers.forEach(n => console.log(n));
  
  console.log(add(1, 2));
  console.log(subtract(10, 5));
  console.log(double(10));
  console.log(createObj());
  