const post = {
    id: 1,
    title: 'VNG',
    body: 'Đây là nội dung',
  };
  
  // Chuyển đổi thành chuỗi JSON
  const str = JSON.stringify(post);
  
  console.log(str);
  
  // Phân tích JSON
  const obj = JSON.parse(str);
  
  console.log(obj.id); // Kết quả: 1
  
  // JSON và mảng
  const posts = [
    {
      id: 1,
      title: 'VNG',
      body: 'Đây là nội dung',
    },
    {
      id: 2,
      title: 'Vu Ngoc Giao',
      body: 'Đây là nội dung',
    },
  ];
  
  const str2 = JSON.stringify(posts);
  
  console.log(str2); 
  