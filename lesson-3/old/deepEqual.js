let user1 = {
    order: {
        price: 20,
        items: {
            mobile: 'Sumsung'
        }
    },
    name: 'Misha',
};

let user2 = {
    name: 'Misha',
    order: {
        price: 20,
        items: {
            mobile: 'Sumsung'
        }
    }
};

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

    // for (let key of keysObj1) {
    //     if (!deepEqual(obj1[key], obj2[key])) {
    //         return false;
    //     }
    // }
    // return true;

    return keysObj1.every((key)=> deepEqual(obj1[key], obj2[key]));
}

console.log(deepEqual(user1, user2));
