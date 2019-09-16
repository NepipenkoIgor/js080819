// scope2
// function fn() {
//     // scope1
//     return function f(a, b, c) {
//
//     };
// }
//
// const fn1 = function f(a, b, c) {
//
// };
// fn1(1, 2, 3);

// console.log((2 + sum(1) + sum(1)(3)(2) + sum(1)(3)) * 10);
// const fn = sum(1);
// fn(3)

// function sum(num1) {
//     return (num2) => {
//         return num1 + num2;
//     };
// };
// function sum(num1) {
//     let currentSum = num1;
//
//     function fn(num2) {
//         debugger
//         currentSum += num2;
//         return fn;
//     }
//
//     fn.toString = () => {
//         return currentSum;
//     };
//
//     return fn;
// }
//
// console.log((2 + sum1(1) + sum1(1, 3, 2) + sum1(1, 3)) * 10);
//
// function sum1(...nums) {
//     return nums.reduce((acc, num) => {
//         return acc += num;
//     }, 0);
// }
