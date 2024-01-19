const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`Nhiệt độ là ${getCelsius(35)} \xB0C`);
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([2, 31, 4, 5, 6]));
((length, width) => {
  const area = length * width;
  const output = `Diện tích của hình chữ nhật có chiều dài ${length} và chiều rộng ${width} là ${area}.`;
  console.log(output);
})(20, 10);
