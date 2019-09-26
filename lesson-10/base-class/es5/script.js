function Person(firstName, lastName, age) {
    let _salary = 0;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.setSalary = (val) => {
        _salary = val;
    }
    this.getSalary = () => {
        return `${_salary}$`;
    };
    // Object.defineProperty(this, 'salary', {
    //     get() {
    //         return `${_salary}$`;
    //     },
    //     set(v) {
    //         setValue(v);
    //     }
    // });

    Person.instanceCount++;
}

Person.instanceCount = 0;

Person.prototype.getInfo = function () {
    return {
        fullName: `${this.firstName} ${this.lastName}`,
        age: this.age
    };
};

Person.prototype.getPersonsCount = function () {
    return Person.instanceCount;
};


function Teacher(firstName, lastName, age, subject) {
    Person.call(this, firstName, lastName, age);
    this.subject = subject;
}

Teacher.prototype = Object.create(Teacher);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.getInfo = function () {
   // Do something;
    return Person.prototype.getInfo.call(this);
}

// let a = new Object()
// Person.call(a);

let p1 = new Person('Igor', 'Nepipenko', 33);
let p2 = new Person('Vlad', 'Loban', 31);
let t1 = new Teacher('Evg', 'Petrenko', 21, ['TS']);
console.log(p1._salary);
console.log(p1.getSalary());
console.log(p2.getInfo());

p1.setSalary(3000);
console.log(p1.getSalary());
console.log(p2.getSalary());

console.log(p2.getPersonsCount())

console.log(t1.getInfo());
console.log(t1.getSalary());

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


