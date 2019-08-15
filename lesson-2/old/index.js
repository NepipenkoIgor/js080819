let age = 33;
let key = 'My key 11';
let ageObj  ={
    age: 55
}
let info = {
    male: true,
    ageObj
};

function getKey() {
    return 'Key from function';
}

const functionKey = getKey();

let infoObj = {
    firstName: 'Igor',
    info,
    age, // age: age
}
let user = {
    '***surname+//': true,
    key: key,
    ['Full' + ' ' + 'name']: 'Nepipenko Igor',
    [functionKey]: 222,
    3: 'some info',
    getName: function () {
        console.log(this);
    },
    getName1() {
        console.log(this);
    }
}

// console.log(user);
// console.log(user['Key from function']);
// console.log(user[getKey()]);
// console.log(user[functionKey]);
// setTimeout(()=>{
//     info.male = false;
//     console.log(user);
// }, 10000);


// console.log(user);
// console.log(user.firstName)
// console.log(user['***surname+//'])
// console.log(user.getName)
// user.getName();
//
// console.log(user.info.male);
// console.log(user.info['male']);
// console.log(user);
//
//
// setTimeout(()=>{
//     user.age = {http: 'learnjavascript'};
//     console.log(user);
// }, 5000);
