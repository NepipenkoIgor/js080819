'use strict';
// let a = {a: 1};
// console.log(a);
// a ----> Object -----> null
//
//
// console.log(Array.prototype.__proto__ === Object.prototype)
// const obj = {};
// console.log(obj.constructor === Object)
//
//
// const arr = [];
// console.log(arr.constructor === Array)
//
// const obj = Object.create({a:1})
// console.log(obj)


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greeting = function () {
    return `Hi ${this.name}`;
}


let user = new Person('Igor', 33);
let admin = new Person('Vlad', 23);
// const user = new Object();
// Person.call(user)
// user.greeting();
// setTimeout(() => {
//     admin.greeting();
// }, 5000)
// console.log(user instanceof Person)
// console.log(admin instanceof Person)
console.log(user.greeting())
console.log(admin.greeting())

function Teacher(name, lastName, age, subjects) {
    Person.call(this, name, age);
    this.lastName = lastName;
    this.subjects = subjects;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function () {
    console.log(`Hi ${this.name} my subjects is ${this.subjects}`)
    return Person.prototype.greeting.call(this);
}


let t = new Teacher('Igor 1', 'Nepipenko', 33, ['ts', 'js', 'angular'])

console.log(t.greeting())

console.log(t)

