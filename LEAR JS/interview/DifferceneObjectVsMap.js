/*
  Giống
  Object và map đều sử dụng dạng key value, cho xem truy xuất, xóa và xem giá trị của từng key
*/

// Khác
const map = new Map()

// Key Object phải là stirng hoặc ký tự còn với map có thể là bất kỳ kiểu gì
map.set(() => 'a', 1)
map.set('c', 1)
map.set('b', 1)

console.log("map ", map);

// Theo tìm hiểu thì khi added 1 key vào map sẽ order lại key cò object thì không

// Map có thuộc tính .size để xác định kích thước của Map còn Object thì không

// Map có thể lặp lại trực tiếp còn obj thì không map qua forEach
map.forEach(item => {
  console.log("item :::", item);
})

console.log('map ::: ', map.values());

// Theo tìm hiểu Map hoạt động tốt hơn trong trường hợp thêm xóa các key thường xuyên