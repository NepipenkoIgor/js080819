import {Menu} from './menu.js';

let menu1 = new Menu(
    document.querySelector('.menu1'),
    'Front End',
    ['React', 'Vue', 'Angular']
);
menu1.open();


let menu2 = new Menu(
    document.querySelector('.menu2'),
    'Back End',
    ['Express', 'Koa', 'Nest']
);
menu2.open();


setTimeout(()=>{
    menu2.close();
    menu1.hide();
}, 5000);

setTimeout(()=>{
    menu1.show();
}, 10000);


