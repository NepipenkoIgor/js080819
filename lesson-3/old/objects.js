// let key1 = Symbol('my prop');
// let key2 = Symbol('my prop');
// let key1 = 'my prop';
// let key2 = 'my prop';
// let obj  = {
//     [key1]: 'my value'
// };
//
// console.log(obj[key2]);
//
// let obj = {};
//
// Object.defineProperties(obj, {
//     name: {value: 'Igor'},
//     age: {value: 33, enumerable: true},
//     fn: {
//         value: () => {
//         }
//     }
// });
// console.log(obj);
//
// let user = Object.create(null, {
//     name: {value: 'Igor'}
// });
// console.log(user)

const user = {name: 'Igor', bonus: 0.2, myMoney(){ return `${this[cbMoney] * (1 + this.bonus)}$`}};
const cbMoney = Symbol();
Object.defineProperty(user, cbMoney,
    {
        enumerable: false,
        configurable: false,
        writable: true, value: 1000
    });
Object.defineProperty(user, 'money', {
    get() {
        console.log(`Get cbMoney ${this[cbMoney]}`);
        return `${this[cbMoney] * (1 + this.bonus)}$`;
    },
    set(money) {
        console.log(`Set cbMoney ${this[cbMoney]}`);
        this[cbMoney] = money;
    }
});

user.money = 1

console.log(user[cbMoney]);
user[cbMoney] = 3000;

console.log(user[cbMoney]);
user.bonus = 0.1;
console.log(user[cbMoney]);
console.log(user.myMoney());

console.log(Object.getOwnPropertyDescriptors(user))

let user = {
    name: 'Igor',
    info: {
        age: 33
    }
};

let {name: firstName = 'Igor', lastName = 'Nepipenko', info: {age: myAge = 21} } = user;

const firstName = user.name;
const myAge = user.info.age;
console.log(firstName);
console.log(lastName);
console.log(age);
