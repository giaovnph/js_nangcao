
const x = 100;
console.log(x, 'toàn cầu');
function run() {
  // Truy cập biến toàn cầu trong hàm
  console.log(window.innerHeight);
  console.log(x, 'trong hàm');
}

run();

if (true) {
  console.log(x, 'trong khối mã');
}

function add() {
  const x = 1;
  const y = 50;
  console.log(x + y);
}


add();
