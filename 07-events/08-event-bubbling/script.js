const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Nút đã được nhấp');
  e.stopPropagation();
});

div.addEventListener('click', () => {
  alert('Div đã được nhấp');
});

form.addEventListener('click', () => {
  alert('Form đã được nhấp');
});

document.body.addEventListener('click', () => {
  alert('Body đã được nhấp');
});
