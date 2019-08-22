const users = [
    {
        age: 40,
        name: 'Яна'
    },
    {
        age: 33,
        name: 'Игорь'
    },
    {
        age: 18,
        name: 'Алена'
    },
    {
        age: 10,
        name: 'Дима'
    },
    {
        age: 50,
        name: 'Яна'
    },
    {
        age: 45,
        name: 'Дима'
    },
];
const table = document.createElement('table');
table.append(createHeader(users[0]), createBody(users));
document.body.appendChild(table);
table.addEventListener('click', sortColumns)


function sortColumns(event) {
    const el = event.target;
    const type = el.dataset.type;
    if (!type) {
        return;
    }
    const table = el.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = [...tbody.querySelectorAll('tr')];
    rows.sort(sortFn(type));
    console.log(rows)
    tbody.innerHTML = '';
    tbody.append(...rows);
}


function sortFn(type) {
    return (tr1, tr2) => {
        const [nEl1, sEl1] = tr1.querySelectorAll('td');
        const [nEl2, sEl2] = tr2.querySelectorAll('td');
        const a = type === 'string'
            ? sEl1.innerHTML
            : Number(nEl1.innerHTML);
        const b = type === 'string'
            ? sEl2.innerHTML
            : Number(nEl2.innerHTML);
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    };
}

function createHeader(user) {
    const thead = document.createElement('thead');
    const headers = Object.keys(user);
    headers.forEach((title) => {
        const th = document.createElement('th');
        th.innerHTML = title;
        th.dataset.type = typeof user[title];
        thead.appendChild(th);
    });

    return thead;
}

function createBody(users) {
    const tbody = document.createElement('tbody');

    users.forEach((user) => {
        const tr = document.createElement('tr');
        const headers = Object.keys(user);
        headers.forEach((title) => {
            const td = document.createElement('td');
            td.innerHTML = user[title];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    return tbody;
}
