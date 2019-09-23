'use strict';

// function fn() {
//     console.log(this);
//     return `${this.firsName} ${this.lastName}`;
// }
//fn();

// const fn = () => {
//     console.log(this);
//     return `${this.firsName} ${this.lastName}`;
// }

const action = {
    type: 'user',
    fn() {
        const sumFn = function (prefix = '', suffix = '') {
            console.log(arguments)
            console.log(`${prefix} ${this.firsName} ${this.lastName} ${suffix}`);
        };
        return sumFn;// `${this.firsName} ${this.lastName}`;
    }
}

const account = {
    firsName: 'Igor',
    lastName: 'Nepipenko',
    getFullName: action.fn
}

const fn1 = account.getFullName(); // sumFn

const fn2 = fn1;
// fn2();

// setTimeout(fn2, 5000);

const div = document.querySelector('.control');

div.addEventListener('click', fn2);


const arr = [
    {
        firsName: 'Igor 1',
        lastName: 'Nepipenko 1',
    },
    {
        firsName: 'Igor 2',
        lastName: 'Nepipenko 2',
    },
    {
        firsName: 'Igor 3',
        lastName: 'Nepipenko 3',
    }
]

arr.forEach((user, i) => {
    const args = ['Admin', `===> ${i}`];
    const fnWithThis = fn2.bind(user);
    fnWithThis('args 1', 'args 2');// fn2.apply(user, args);
}, arr[2]);
const str = 'aabcaadaar';
const newStr = Array.prototype.filter.call(str, (char) => char !== 'a').join('');
console.log(newStr);

console.log(Array.prototype)
