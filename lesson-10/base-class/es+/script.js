

class Person {

    static getPersonCount() {
        return Person.personsCount;
    }

    static personsCount = 0;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.firstName = lastName;
        this.age = age;
        this._salary = 0;
        Person.personsCount++;
    }

    getInfo() {
        return {
            fullName: `${this.firstName} ${this.lastName}`,
            age: this.age
        };
    }

    get salary() {
        return `${this._salary} $`;
    }

    set salary(v) {
        this._salary = v;
    }

    getPersonsCount() {
        return Person.getPersonCount();
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, age, subject){
        super(firstName, lastName, age);
        this.subject = subject;
    }
    getInfo () {
        // Do something;
        return super.getInfo();
    }
}

// Person.personsCount = 0;
// let a = new Object()
// Person.call(a);

let p1 = new Person('Igor', 'Nepipenko', 33);
let p2 = new Person('Vlad', 'Loban', 31);
let t1 = new Teacher('Evg', 'Petrenko', 21, ['TS']);
console.log(p1._salary);
console.log(p1.salary);
console.log(p2.salary);

p1.salary = 3000;
console.log(p1.salary);
console.log(p2.salary);
console.log(p2.salary)


console.log(p2.constructor.instanceCount)
console.log(t1.getInfo());
console.log(t1.salary);
// try {
//     console.log(p2.getInfo());
// } catch (e) {
//     console.log('getInfo don\'t exist');
// }
// setTimeout(() => {
//     Person.prototype.getInfo = function() {
//         return {
//             fullName: `${this.firstName} ${this.lastName}`,
//             age: this.age
//         };
//     };
// }, 3000)
// setTimeout(() => {
//     console.log(p1);
//     console.log(p2.getInfo());
// }, 5000)


