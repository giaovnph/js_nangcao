const age = 17;

// Sử dụng câu lệnh if
if (age >= 18) {
  console.log('Bạn có thể bỏ phiếu!');
} else {
  console.log('Bạn không thể bỏ phiếu');
}

// Sử dụng toán tử ba ngôi
age >= 18 ? console.log('Bạn có thể bỏ phiếu!') : console.log('Bạn không thể bỏ phiếu');

// Gán giá trị điều kiện cho một biến
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'Bạn có thể bỏ phiếu!' : 'Bạn không thể bỏ phiếu';

console.log(canVote);
console.log(canVote2);

// Nhiều câu lệnh

const auth = true;

// Phiên bản dài
// let redirect;

// if (auth) {
//   alert('Chào mừng bạn đến trang điều khiển');
//   redirect = '/dashboard';
// } else {
//   alert('Truy cập bị từ chối');
//   redirect = '/login';
// }

// Phiên bản ngắn hơn với toán tử ba ngôi
const redirect = auth
  ? (alert('Chào mừng bạn đến trang điều khiển'), '/dashboard')
  : (alert('Truy cập bị từ chối'), '/login');

console.log(redirect);

// Toán tử ba ngôi không có else
auth ? console.log('Chào mừng bạn đến trang điều khiển') : null;
// Rút gọn cho toán tử ba ngôi không có else
auth && console.log('Chào mừng bạn đến trang điều khiển');
