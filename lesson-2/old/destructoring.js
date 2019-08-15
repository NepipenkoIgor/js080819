let baseInfo = Object.create({
    someProp: 1
});

baseInfo.male = true;

let userInfo = {
    age: 33
}

let user = {
    userInfo
};
user.firstName = 'Igor';
const obj1 = Object.assign({}, baseInfo, user);
const obj = {...baseInfo, ...user}

const {userInfo: {age: myAge}} = obj;
// const myAge = obj.userInfo.age
console.log(myAge);
console.log(obj.userInfo.age);


// TODO descriptor !!!





