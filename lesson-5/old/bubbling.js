const btn = document.querySelector('button');
const main = document.querySelector('main');
// const fn = (e) => {
//     console.log(e.target, e.currentTarget, e.myCustomProp);
// }
// document.addEventListener('click', fn);
// main.addEventListener('click', fn);
// btn.addEventListener('click', (e) => {
//     console.log(e.target, e.currentTarget);
//     e.myCustomProp = 'JS is Awesome';
// });

function bubbling(e) {
    console.log('bubbling', e.currentTarget.tagName, e.myCustomProp);
}

function capture(e) {
    console.log('capture', e.currentTarget.tagName, e.myCustomProp);
}

// document.body.addEventListener('click', bubbling);
document.body.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    console.log('capture', e.currentTarget.tagName, e.myCustomProp);
    e.myCustomProp = 'JS is Awesome';
}, true);
document.body.addEventListener('click', (e) => {
    console.log('Body listener 2');
}, true)
// main.addEventListener('click', bubbling);
main.addEventListener('click', capture, true);
// btn.addEventListener('click', (e) => {
//     console.log('bubbling', e.currentTarget.tagName);
// });
btn.addEventListener('click', capture, true);
