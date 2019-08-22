// const ul = document.querySelector('ul.front');
// // const fragment = document.createDocumentFragment();
// //
// // const li1 = document.createElement('li');
// // li1.innerHTML = '<span>Angular</span>';
// //
// // const li2 = document.createElement('li');
// // li2.innerHTML = '<span>React</span>';
// //
// // const li3 = document.createElement('li');
// // li3.innerHTML = '<span>Vue</span>';
// //
// // setTimeout(() => {
// //     fragment.append(li1, li2, li3);
// //     ul.appendChild(fragment);
// // }, 5000)
//
// const strForParse = ul.dataset.list.replace(/'/g, '"');
// console.log(JSON.parse(strForParse));
//
// const list = JSON.parse(strForParse).reduce((htmlStr, topic) => {
//     return htmlStr += `<li>${topic}</li>`;
// }, '');
//
// ul.insertAdjacentHTML('afterbegin', list);
