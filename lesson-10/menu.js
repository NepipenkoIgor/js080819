export class Component {
    constructor(element) {
        this._element = element;
    }

    hide() {
        this._element.setAttribute('hidden', true);
    }

    show() {
        this._element.removeAttribute('hidden');
    }
}

export class Menu extends Component {
    constructor(element, title, items) {
        super(element);
        Object.assign(this, {_title: title, _items: items});
        this._render();
        this._dropdownArea = this._element.querySelector('.dropdown-menu');
        this._element.querySelector('button').addEventListener('click', this.toggle.bind(this));
    }

    close() {
        this._dropdownArea.classList.remove('show');
    }

    open() {
        this._dropdownArea.classList.add('show');
    }

    toggle() {
        this._dropdownArea.classList.toggle('show');
    }

    _render() {
        this._element.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"  aria-haspopup="true" aria-expanded="false">
                    ${this._title}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    ${this._items.map((el) => `<a class="dropdown-item" href="#">${el}</a>`).join('')}
                </div>
            </div>`;
    }
}
