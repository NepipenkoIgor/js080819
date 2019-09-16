// Task 1

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         // Task 2
//         debugger
//         console.log(i);
//     });
// }
//
// for (let j = 0; j < 100000000; j++) {
//
// }

// 0 - 1                -
// 10 - console.log(i);  - console.log(i)


// for (var i = 0; i < 10; i++) {
//     setTimeout(fn(i));
// }
//
// function fn(j) {
//     return () => {
//         debugger
//         console.log(j);
//     };
// }

function makeArmy(count) {
    let soldiers = [];
    let serialNum = 0;
    for (; serialNum < count; serialNum++) {
        let soldier = (num) => () => console.log(num);
        soldiers.push(() => {
            console.log(soldier);
        });
    }
    return soldiers;
}

const army = makeArmy(10); // [()=>{  console.log(serialNum);}, ()=>{  console.log(serialNum);} ()=>{  console.log(serialNum);}]
army[4]();
army[9]();
