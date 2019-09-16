'use strict';

function createCounter(el) {
    el.insertAdjacentHTML('afterbegin', `
        <button type="button" class="btn btn-primary col-sm dec">-</button>
        <span class="col-sm">0</span>
        <button type="button" class="btn btn-primary col-sm inc">+</button>
    `);
    let count = 0;

    const viewPort = el.querySelector('span');

    el.addEventListener('click', (e) => {
        debugger
        const incButton = e.target.closest('.inc');
        const decButton = e.target.closest('.dec');
        if (!incButton && !decButton) {
            return;
        }
        viewPort.innerHTML = incButton
            ? ++count
            : --count;
    });
}

createCounter(document.querySelector('.c1'));
createCounter(document.querySelector('.c2'));


function fn() {
    console.log(this);
}

fn();


let user = {
    name: 'Igor',
    surname: 'Nepipenko',
    getFull() {
        console.log(this);
        return `${this.name} ${this.surname}`;
    }
};

(user.getFull || alert)();

// const fullName = user.getFull;
//
// console.log(fullName());
