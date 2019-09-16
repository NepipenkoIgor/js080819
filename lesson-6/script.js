const button1 = document.querySelector('.btn');
const button2 = document.querySelector('.btn1');
let a = 1;
let linkToCounterFn1 = createCounter('Button 1'); // function 1 own count;
let linkToCounterFn2 = createCounter('Button 2'); // function 2 own count;
button1.addEventListener('click', linkToCounterFn1);

button2.addEventListener('click', linkToCounterFn2);


function createCounter(name) {
    let count = 0;
    return function counterFn() {
        console.log(`${name} ${++count}`);
    };
}




// fn(handler);
//
// function fn(cb = () => {}) {
//     cb();
// }

// noop
// function handler() {
//     console.log('click');
// }
