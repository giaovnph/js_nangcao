// Hàm lấy dữ liệu sử dụng XMLHttpRequest và trả về một promise
function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        xhr.status === 200 ? resolve(JSON.parse(xhr.responseText)) : reject('Có lỗi xảy ra');
      }
    };

    // Giả lập việc chờ đợi trong quá trình gửi yêu cầu
    setTimeout(() => xhr.send(), Math.floor(Math.random() * 3000) + 1000);
  });
}

// Tạo các promise để lấy dữ liệu từ các nguồn khác nhau
const promiseMovies = getData('./movies.json');
const promiseActors = getData('./actors.json');
const promiseDirectors = getData('./directors.json');

const promiseHelloWorld = Promise.resolve('Xin chào thế giới');

// Sử dụng Promise.all để đợi tất cả các promise hoàn thành
Promise.all([promiseMovies, promiseActors, promiseDirectors, promiseHelloWorld])
  .then((data) => console.log(data)) // Kết quả là một mảng dữ liệu từ các promise
  .catch((error) => console.log(error)); // Bắt lỗi nếu có lỗi xảy ra
