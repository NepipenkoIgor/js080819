console.log(btn.onclick)
// btn.onclick = (e) => {
//     console.log(e.altKey);
// }
const fn = (e) => {
    console.log(e.altKey);
};

btn.addEventListener('click', fn);

btn.removeEventListener('click', fn);

// let count = 0;
// document.onclick = (e) => {
//     console.log(e.altKey);
// }
