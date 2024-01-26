// setTimeout - nhận một hàm callback và thời gian chờ đến khi hàm đó được thực thi

setTimeout(function () {
    console.log('Xin chào từ callback');
  }, 2000);
  
  // Hàm có tên
  setTimeout(changeText, 3000);
  
  function changeText() {
    document.querySelector('h1').textContent = 'Xin chào từ callback';
  }
  
  // clearTimeout() sẽ hủy bỏ một bộ đếm thời gian
  const timerId = setTimeout(changeText, 3000);
  
  document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Đã hủy bộ đếm thời gian');
  });
  