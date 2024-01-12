let x;
const congViec = {
  id: 1,
  ten: 'Mua Sữa',
  hoanThanh: false,
};

x = congViec;

// Lồng đối tượng
const nguoi = {
  diaChi: {
    toaDo: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = nguoi.diaChi.toaDo.lat;

// Sử dụng toán tử spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };
const obj4 = { ...obj1, ...obj2 }; 

// Mảng các đối tượng công việc
const congViecArray = [
  { id: 1, ten: 'Mua Sữa' },
  { id: 2, ten: 'Đi đón con từ trường' },
  { id: 3, ten: 'Đổ rác' },
];

x = congViecArray[0].ten;

x = Object.keys(congViec);

x = Object.keys(congViec).length;

x = Object.values(congViec);

x = Object.entries(congViec);

x = congViec.hasOwnProperty('age');

console.log(x);
