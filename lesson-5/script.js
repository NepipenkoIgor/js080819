const todo = document.querySelector('.todoapp');
generateTODO(todo);


function generateTODO(element) {
    const input = element.querySelector('.new-todo');
    const ul = element.querySelector('.todo-list');
    const filter = element.querySelector('.filters');
    const count = element.querySelector('footer .todo-count strong');
    // count.addEventListener('update', (e) => {
    //     e.target.innerHTML = e.detail;
    // });

    ul.addEventListener('click', ({target: el}) => {
        const isRemove = el.classList.contains('destroy');
        const isComplete = el.classList.contains('toggle');
        if (!isRemove && !isComplete) {
            return;
        }
        const elLi = el.closest('li');
        if (isRemove) {
            ul.removeChild(elLi);
            updateCount(count, ul);
            return;
        }
        elLi.classList.toggle('completed');
    });

    input.addEventListener('keydown', ({code, target}) => {
        if (code !== 'Enter' || !target.value) {
            return;
        }
        ul.insertAdjacentHTML('beforeend', `<li>
                <div class="view"><input class="toggle" type="checkbox"><label>${target.value}</label>
                    <button class="destroy"></button>
                </div>
            </li>`);
        target.value = '';
        updateCount(count, ul);
    });

    filter.addEventListener('click', ({target}) => {
        const list = ul.querySelectorAll('li');
        for (let li of list) {
            switch (target.className) {
                case 'all': {
                    li.removeAttribute('hidden');
                    break;
                }
                case 'active': {
                    if (li.classList.contains('completed')) {
                        li.setAttribute('hidden', true);
                        break;
                    }
                    li.removeAttribute('hidden');
                    break;
                }
                case 'completed': {
                    if (li.classList.contains('completed')) {
                        li.removeAttribute('hidden');
                        break;
                    }
                    li.setAttribute('hidden', true);
                    break;
                }
            }
        }
        updateCount(count, ul);
    });
}

function updateCount(el, listContainer) {
    const list = [...listContainer.querySelectorAll('li')].filter((li) => !li.hasAttribute('hidden'));
    el.innerHTML = list.length;
    // const event = new CustomEvent(name, {'detail': list.length})
    // el.dispatchEvent(event);
}


