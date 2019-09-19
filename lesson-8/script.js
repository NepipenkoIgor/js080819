'use strict';


// function filter(cb) {
//     const arr = [];
//     console.log(this);
//     for (let i = 0; i < this.length; i++) {
//         const done = cb(this[i]);
//         if (done) {
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }
//
// const res1 = filter.call('aanbaaa', (char) => char !== 'a');
// const res2 = filter.call(['a', 'b', 'a'], (char) => char !== 'a');
//
// console.log(res1);
// console.log(res2);

// function bind(fn, context, ...bindArgs ) {
//     return function (...args) {
//         return fn.apply(context, [...bindArgs,...args]);
//     };
// }
//
// const account = {
//     name: 'Igor',
//     age: 33
// };
//
// function getInfo(prefix = '') {
//     console.log(`${prefix} ${this.name} ${this.age}`);
// }
//
// setTimeout(bind(getInfo, account, 'Admin'), 1000);


function sum(a, b) {
    return a + b;
}


function getUserWithAge(user, age) {
    user.age = age;
    return user;
}

const fn1 = logDecorator(sum);
const fn2 = logDecorator(getUserWithAge);

const mySum = fn1(1, 22);
fn2({name: 'Igor'}, 22);

console.log(mySum * 3);








function logDecorator(fn) {
    return function (...args) {
        const result = fn.call(this, ...args);
        const fnName = fn.name;
        const strArgs = args.map((arg) => JSON.stringify(arg)).join(', ');
        const strResult = JSON.stringify(result);
        console.log(`Call:  ${fnName}(${strArgs}) => ${strResult}`);
        return result;
    };
}
