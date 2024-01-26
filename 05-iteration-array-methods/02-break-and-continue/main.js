for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log('Dừng lại...');
    break;
  }
  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Bỏ qua số 13...');
    continue;
  }
  console.log(i);
}
