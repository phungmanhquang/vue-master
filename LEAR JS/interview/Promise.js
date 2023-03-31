
const promise4 = ()  => new Promise(function (resolve, reject) {
  console.log('promise four');
  setTimeout(resolve, 1000, "four");
});
var promise1 = () => new Promise(function (resolve, reject) {
  console.log('promise one');
  setTimeout(resolve, 1001, "one");
});
var promise2 = () => new Promise(function (resolve, reject) {
  console.log('promise two');
  setTimeout(resolve, 1000, "two");
});
var promise3 = () => new Promise(function (resolve, reject) {
  console.log('promise three');
  setTimeout(resolve, 1000, "three");
});


Promise.allSettled([promise2, promise1, promise3, promise4]).then(function (value) {
  console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});

// console.log("null", Number(null));
// console.log("undefined", Number(undefined));

// const res = eval('console.log("null", Number(null));')
// console.log('res ', res);