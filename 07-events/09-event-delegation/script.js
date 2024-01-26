const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Thêm một trình nghe sự kiện đơn trên phần tử cha (Event Delegation)
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

list.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});
