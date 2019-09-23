'use strict';

// function makeCaching(fn) {
//     let cache = {};
//     return (arg) => {
//         if (arg in cache) {
//             return cache[arg];
//         }
//         cache[arg] = fn(arg);
//         return cache[arg];
//     };
// }
//
// function returnObj(x) {
//     return x;
// }
//
// const cachedInc = makeCaching(returnObj);
// console.log('result 1', cachedInc({name: 'Igor'}));
//
// console.log('result 1', cachedInc({name: 'Igor', age: 33}));
//
// console.log('result 1', cachedInc({name: 'Igor', male: true}));
//
// console.log('result 1', cachedInc({name: 'Igor'}));

//TODO: why ?

function makeCaching(fn) {
    let cache = new Map();
    return (...args) => {
        k:for (let [key] of cache.entries()) {  // entry => [key, value]
            if (key.length !== args.length) {
                continue;
            }
            for (let i = 0; i < key.length; i++) {
                if (!deepEqual(key[i], args[i])) {
                    continue k;
                }
            }
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(args, result); //
        return result;
    };
}

function returnObj() {
    return Math.random();
}

const cachedInc = makeCaching(returnObj);
console.log('result 1', cachedInc({name: 'Igor'}, {name: 'Max'}, {name: 'Anna', age: 33}));
console.log('result 2', cachedInc({name: 'Vlad'}));
console.log('result 3', cachedInc({name: 'Igor'}, {name: 'Max'}));
console.log('result 4', cachedInc({name: 'Vlad'}, {name: 'Anna'}));
console.log('result 5', cachedInc({name: 'Vlad'}));
console.log('result 6', cachedInc({name: 'Igor'}, {name: 'Max'}));
console.log('result 7', cachedInc({name: 'Igor'}, {name: 'Max'}, {name: 'Anna'}));
console.log('result 8', cachedInc({name: 'Igor'}, {name: 'Max'}, {name: 'Anna', age: 33}));

// 1, 8
// 2, 5
// 3, 6
// 4
// 7



// {
//     [{name: 'Igor'}, {name: 'Max'}] : 0.12312312424,
//     [{name: 'Vlad'}]: 0.123123123,
//     [{name: 'Vlad'}, {name: 'Anna'}]: 0.124124
// }

// console.log('result 5', cachedInc({name: 'Igor'}, {name: 'Max'}));
// console.log('result 6', cachedInc({name: 'Igor'}, {name: 'Max'}));

// console.log('result 1', cachedInc({name: 'Igor', age: 33}));
//
// console.log('result 1', cachedInc({name: 'Igor', male: true}));
//
// console.log('result 1', cachedInc({name: 'Igor'}));


function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (obj1 === null || obj2 === null) {
        return false;
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);

    if (keysObj1.length !== keysObj2.length) {
        return false;
    }

    return keysObj1.every((key) => deepEqual(obj1[key], obj2[key]));
}
