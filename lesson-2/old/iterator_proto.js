let info = {
    male: true
};

let s = Symbol();

let infoObj = {
    firstName: 'Igor',
    info,
    age: 33, // age: age
    [{a: 1}]: 1,
    [s]: 'some prop',
    [Symbol.iterator]: function () {

    }
}


let user = Object.create(infoObj);
user.surname = 'Nepipenko';
user[Symbol.iterator] = function () {
    let index = 0;
    return {
        next: () => {
            if (index > this.surname.length - 1) {
                return {
                    done: true
                };
            }
            return {
                done: false,
                value: this.surname[index++]
            };
        }
    };
}

// let admin = {};
//
// Object.setPrototypeOf(admin, user);

// console.log(admin);
// console.log(admin.toString);
// console.log(admin.__proto__.__proto__.__proto__.toString);

// console.log(user.__proto__);
// console.log(user.toString);
// console.log(infoObj);
console.log(Object.getOwnPropertySymbols(user));
console.log(user);
for (let v of user) {  // user[Symbol.iterator].next()
    console.log(v);
}
// console.log(admin);
// console.log(Object.keys(admin));
