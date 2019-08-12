game();


// TODO eslint
function game() {
    const min = 0;
    const max = 10;
    const num = getRandomInt(min, max)
    console.log(num);

    const text = prompt(`Я игра угадайка :) 
Введите натуральное число от ${min} до ${max}`);

    console.log(text);

    const int = +text;
    if (text === null) {
        console.log('Ну как хочешь ((');
        return;
    }
    if (Number.isNaN(int)) {
        console.log('Ты понимаешь ?! Число, а не текст');
        return;
    }

    if (text === '') {
        console.log('Ты ничего не ввел!!!!');
        return;
    }

    if (!Number.isInteger(int)) {
        console.log('Ты понимаешь, что такое натуральное число ?!');
        return;
    }

    if (int < 0 || int > 10) {
        console.log(`Интервал должен быть от ${min} до ${max} !!!`);
        return;
    }

    if (int !== num) {
        console.log('Ты был близко!!!');
        return;
    }

    console.log('Tы угадал!!!');

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const obj = {
    a: 1
};

obj.a = 44;
