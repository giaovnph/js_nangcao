// Tham số mặc định
function registerUser(user = 'Bot') {
    return `${user} đã đăng ký`;
  }
  console.log(registerUser());
  
  // Tham số Rest
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4, 5, 6, 100));
  
  // Đối tượng làm tham số
  function loginUser(user) {
    return `Người dùng ${user.name} có id là ${user.id} đã đăng nhập`;
  }
  console.log(loginUser({ id: 1, name: 'John' }));
  console.log(loginUser({ id: 2, name: 'Sara' }));
  
  // Mảng làm tham số
  function getRandom(arr) {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
  }
  getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  