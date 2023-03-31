// slice trả ra mảng mới dựa vào vị trí start và end truyền vào và không thay đổi mảng gốc 
const arrInt = [1,2,3,4,5] 
const arrInt1 = arrInt.slice(0, 2); // return [1,2]
const arrInt2 = arrInt.slice(2, 3); // return [3]
const arrInt3 = arrInt.slice(4); // return [5]

// splice xóa, thêm item vào mảng trả về mảng các item bị xóa trong mảng dựa vào vị trí start và số lượng item. 
// Có thêm item vào sau số lượng xóa
const arrIntOriginal1 = [1,2,3,4,5]
const arrIntOriginal2 = [1, 2, 3, 4, 5]
const arrIntOriginal3 = [1, 2, 3, 4, 5]

const spliceArrInt1 = arrIntOriginal1.splice(0,2);
const spliceArrInt2 = arrIntOriginal2.splice(3);
const spliceArrInt3 = arrIntOriginal3.splice(3,1,"a", "b", "c");

console.log(spliceArrInt1, arrIntOriginal1);
console.log(spliceArrInt2, arrIntOriginal2);
console.log(spliceArrInt3, arrIntOriginal3);

const map = new Map()

console.log('typeof Map ', typeof map); 