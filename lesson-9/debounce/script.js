'use strict';

function debounce(fn, ms) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            return fn.call(this, ...args);
        }, ms);
    };
}

function handler(event) {
    console.log(this)
    console.log(event.target.value);
}

const input = document.querySelector('input');

input.addEventListener('input', debounce(handler, 300));

// let f = debounce(alert, 1000);
// // f1--f2------
// f(1); // выполняется немедленно
// f(2); // проигнорирован
//
// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1400); // выполняется
// setTimeout( () => f(5), 1500);
// setTimeout( () => f(6), 3000);
