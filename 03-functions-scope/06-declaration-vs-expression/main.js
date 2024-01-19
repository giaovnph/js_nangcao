function addDollarSign(value) {
    return '$' + value;
  }
  // Khi sử dụng khai báo hàm, bạn có thể gọi hàm trước khi khai báo. Với biểu thức hàm, bạn không thể làm điều này
  console.log(addDollarSign(100));
  // Biểu thức Hàm
  const addPlusSign = function (value) {
    return '+' + value;
  };
  console.log(addPlusSign(200));
  