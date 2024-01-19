const d = new Date(2022, 1, 10, 19, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

// Đánh giá giá trị ngay lập tức
switch (month) {
  case 1:
    console.log('Hiện là tháng 1');
    break;
  case 2:
    console.log('Hiện là tháng 2');
    break;
  case 3:
    console.log('Hiện là tháng 3');
    break;
  default:
    console.log('Không phải tháng 1, 2 hoặc 3');
}

// Đánh giá khoảng giá trị
switch (true) {
  case hour < 12:
    console.log('Chào buổi sáng');
    break;
  case hour < 18:
    console.log('Chào buổi chiều');
    break;
  default:
    console.log('Chào buổi tối');
}
