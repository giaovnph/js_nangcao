const x = 100000;
if (true) {
  console.log(x);
  const y = 200000;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// Một vòng lặp là một khối mã
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
if (true) {
  const a = 500000;
  let b = 600000;
  var c = 700000;
}

console.log(c);

// var là có phạm vi hàm
function run() {
  var d = 100000;
  console.log(d);
}

run();
const foo = 1;
var bar = 2; // Đặt trên đối tượng window
