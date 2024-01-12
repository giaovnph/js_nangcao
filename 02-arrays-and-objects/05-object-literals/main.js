let x;

// Tạo một đối tượng
const nguoi = {
  ten: 'Giao',
  tuoi: 30,
  laQuanTriVien: true,
  diaChi: {
    duong: '123 Đường Chính',
    thanhPho: 'Boston',
    tinh: 'MA',
  },
  soThich: ['âm nhạc', 'thể thao'],
};

// Truy cập các thuộc tính của đối tượng
x = nguoi.ten; // Dot notation
x = nguoi['tuoi']; // Bracket notation
x = nguoi.diaChi.tinh;
x = nguoi.soThich[0];

// Cập nhật các thuộc tính
nguoi.ten = 'Vu';
nguoi['laQuanTriVien'] = false;

// Xóa các thuộc tính
delete nguoi.tuoi;

// Tạo các thuộc tính mới
nguoi.coCon = true;

// Thêm các hàm
nguoi.gioiThieu = function () {
  console.log(`Xin chào, tôi tên là ${this.ten}`);
};

nguoi.gioiThieu();

// Khóa với nhiều từ
const nguoi2 = {
  'ten đầu': 'Ngoc',
  'ten cuối': 'Ao',
};

x = nguoi2['ten đầu'];

console.log(x);
