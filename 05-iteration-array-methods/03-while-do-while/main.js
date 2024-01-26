let i = 0;

// Vòng lặp while
while (i <= 20) {
  console.log('Số ' + i);
  i++;
}

// Lặp qua mảng
const arr = [10, 20, 30, 40, 50];

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Lồng vòng lặp while
while (i <= 5) {
  console.log('Số ' + i);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }

  i++;
}

// Vòng lặp Do While - Luôn chạy ít nhất một lần
do {
  console.log('Số ' + i);
  i++;
} while (i <= 20);
