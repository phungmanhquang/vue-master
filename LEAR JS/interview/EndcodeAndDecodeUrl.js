// encodeURI: là 1 function nhận vào 1 string url trả về đoạn string được mã hóa
// decodeURI: là 1 function nhận vào 1 string được mã hóa trả về đoạn string được giải mã
// encodeURIComponent: nếu muốn encode các ký tự đặc biệt / ? : @ & = + $ #
//

let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURIComponent(uri);
let decoded_uri = decodeURIComponent(encoded_uri);

console.log('encoded_uri ', encoded_uri);
console.log('decoded_uri ', decoded_uri);