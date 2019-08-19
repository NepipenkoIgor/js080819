// let users = [
//     {_id: '124asdas145', name: 'Igor', info: {age: 33}}
//     , {_id: '1sda145', name: 'Vlad'},
//     {_id: '44523asds', name: 'Evgeniya'}
// ];
// let hashMap = {}
// let newUser =users.forEach((user, index, arr) => {
//     console.log(user, index, arr);
//     hashMap[index] = user;
// });
//
// console.log(hashMap);

// let newUsers = users
//     .map((user, index) => {
//         return Object.assign({}, user, {age: (index + 1) * 10});
//     });
// .filter((user) => user.age > 10)
// .reduce((acc, user) => {
//     return {...acc, [user._id]: user};
// }, {});

// console.log(users);
// console.log(newUsers.find((user)=> user._id === '44523asds'));
//console.log(newUsers['44523asds']);
// console.log(newUsers === users);
// console.log(newUsers[0] === users[0]);
// console.log(newUsers[0].info === users[0].info);
// newUsers.sort((userPrev, userNext) => {
//     if (userPrev.age < userNext.age) {
//         return 1;
//     }
//     if (userPrev.age > userNext.age) {
//         return -1;
//     }
//     return 0;
// })
//
// let user = newUsers.splice(1, 0, {name: 'Fedor', age : 40});
//
//
// console.log(user)
