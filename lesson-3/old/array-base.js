// let arr1 = [1, 2];
// console.log(arr1);
// console.log(arr1[0]);
// console.log(arr1[2]);
// console.log(arr1 instanceof Array);
// console.log(Array.isArray('asd'));
// console.log(arr1.__proto__);
// arr1.length = 0;
// console.log(arr1);
// arr1[20] = 'Igor';
// console.log(arr1);
//
// function fn(a, b, c) {
//     console.log(arguments);
//     console.log(Array.from(arguments, (item, index) => {
//         return item ** index;
//     }));
//     console.log([...arguments, 'Igor', ...[4, 5, 6]]);
// }
//
// fn(1, 2, 3);

// let arr2 = new Array(1, 2, 3, 3);
// console.log(2, arr2);
//
// let arr3 = new Array(10);
// console.log(3, arr3);
//
// let arr4 = new Array({user: 'Igor'});
// console.log(4, arr4);
//
// let arr5 = Array.of({user: 'Igor'});
// console.log(5, arr5);

const users = [
    {
        name: 'Igor',
        info: {
            age: 33
        }
    },
    {
        name: 'Evgeniya',
        info: {
            age: 30
        }
    }
]
//
// let user = users[1];
// let name = user.name;
// let age = user.info.age;
const [, {name, info: {age}}] = users;
console.log(name, age)




