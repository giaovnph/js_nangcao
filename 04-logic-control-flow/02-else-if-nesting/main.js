const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log('Chào buổi sáng');
} else if (hour < 18) {
  console.log('Chào buổi chiều');
} else {
  console.log('Chào buổi tối');
}

// If lồng nhau
if (hour < 12) {
  console.log('Chào buổi sáng');

  if (hour === 6) {
    console.log('Thức dậy!');
  }
} else if (hour < 18) {
  console.log('Chào buổi chiều');
} else {
  console.log('Chào buổi tối');

  if (hour >= 20) {
    console.log('zzzzzzzz');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('Đến giờ làm việc!');
}

if (hour === 6 || hour === 20) {
  console.log('Đánh răng!');
}
