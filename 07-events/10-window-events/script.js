
window.addEventListener('load', () => console.log('Trang đã được tải'));

// Khi DOM được tải
window.addEventListener('DOMContentLoaded', () => console.log('DOM đã được tải'));

console.log('Chạy tôi');

// Sự kiện Resize
window.addEventListener('resize', () => {
  document.querySelector(
    'h1'
  ).innerText = `Đã thay đổi kích thước thành ${window.innerWidth} x ${window.innerHeight}`;
});

// Sự kiện Scroll
window.addEventListener('scroll', () => {
  console.log(`Đã cuộn: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

// Sự kiện Focus và Blur
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});

window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black';
  });
});
