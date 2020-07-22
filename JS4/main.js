// - створити функцію яка виводить масив

function showarr(array) {
    for (const i of array) {
        console.log(i);

    }
}

showarr([2, 3, 6, 7, 2, 3, 6, 65])

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function random() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    showarr(arr);
}


// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function trimin(a, b, c) {
    console.log(Math.min(a, b, c));
    return Math.min(a, b, c)
}

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function trimax(num1, num2, num3) {
    console.log(Math.max(num1, num2, num3));
    return Math.min(num1, num2, num3)
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function minmax() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i])

    }
    console.log(Math.max(...arr));
    return Math.min(...arr)
}

let a = minmax(2, 4, 4, 2, 23, 12, 76)
console.log(a);


// - створити функцію яка виводить масив
// - створити функцію яка повертає найбільше число з масиву

function arraymax(array) {
    return Math.max(...array)
}

arraymax([2, 3, 6, 7, 2, 3, 6, 65])

// - створити функцію яка повертає найменьше число з масиву

function arraymin(array) {
    return Math.min(...array)
}

arraymin([2, 3, 6, 7, 2, 3, 6, 65])

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function arraysum(array) {
    let sum = 0
    for (const i of array) {
        sum += i
    }
    return sum
}

console.log(arraysum([2, 3, 6, 7, 2, 3, 6, 65]));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arraymean(array) {
    let sum = 0
    for (const i of array) {
        sum += i
    }
    sum = sum / array.length
    return sum
}

console.log(arraymean([2, 8, 2, 4]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

function objnum(arrayOfObjects) {
    return arrayOfObjects.length
}

console.log(
    objnum([
        1, 3, false, {num: 2, l: 'fsfd'}, 'dfdsg'
    ])
);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function fieldNum(arrayOfObjects) {
    let fields = 0
    for (const obj of arrayOfObjects) {
        fields += Object.keys(obj).length;
    }
    return fields
}


console.log(fieldNum([
    {
        n: 1,
        b: 4,
        gg: 'fdfd'
    },
    {
        32: 'fgd',
        gfgf: 12,
    },
    {
        'fdsf': 22,
        'rere': true,
        33: 99,
        'rre': 3,
        3333: '1343'
    }
]));


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function sumOfArrays(array1, array2) {
    let array3 = [];
    for (let i = 0; i < array1.length; i++) {
        array3[i] = array1[i] + array2[i]

    }
    return array3
}

console.log(sumOfArrays([1, 2, 3], [3, 2, 1]));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function swapI(array, i) {
    let j=array[i];
    array[i]=array[i+1];
    array[i+1]=j
    console.log(array);
}
swapI([1,2,3,4,5,6,7,'j','k'], 6)


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arr = [1,0,6,0,3];
//
// function moveZero(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]===0) {
//             array.splice(i, 1);
//             array.push(0);
//         }
//     }
// }
// moveZero(arr);
// console.log(arr);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function text() {
    let div = document.createElement('div');
    div.innerText = "Hello owu";
    document.body.appendChild(div)
}

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function addElem(element, text) {
//     let elem = document.createElement(element);
//     elem.innerText = text;
//     document.body.appendChild(elem)
// }
// addElem('p', 'test text')

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//   Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// let cars = [
//     car1 = {model: 'tesla', year: 2019, power: 400, color: 'black'},
//     car2 = {model: 'fait', year: 2016, power: 140, color: 'blue'},
//     car3 = {model: 'WV', year: 2013, power: 450, color: 'grey'},
//     car4 = {model: 'Suzuki', year: 2011, power: 200, color: 'brown'},
//     car5 = {model: 'Toyota', year: 2010, power: 500, color: 'yellow'},
//     car6 = {model: 'Nissan', year: 2020, power: 100, color: 'red'},
//     car7 = {model: 'Mazda', year: 2015, power: 120, color: 'purple'},
//     car8 = {model: 'SEAT', year: 2018, power: 800, color: 'white'},
//     car9 = {model: 'Porsche', year: 2019, power: 430, color: 'cream'},
//     car10 = {model: 'Infiniti', year: 2012, power: 480, color: 'green'}
// ];
//
// function carsFunc(array, id) {
//     let elem = document.getElementById(id);
//     for (const arrayElement of array) {
//         let div = document.createElement('div');
//         div.innerText = JSON.stringify(arrayElement);
//         elem.appendChild(div);
//     }
// }
// carsFunc(cars, 'const');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//   Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//   Для кожної властивості створити всередені блока автомоблія свій блок

// function carsFunc2(array, id) {
//     let elem = document.getElementById(id);
//     for (const arr of array) {
//         let div = document.createElement('div');
//         for (const item in arr) {
//             let div2 = document.createElement('div');
//             div2.innerText = `${item}: ${arr[item]}`;
//             div.appendChild(div2)
//         }
//         elem.appendChild(div);
//     }
// }
// carsFunc2(cars, 'const');

//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
//     Приклад масивів:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},
];
// Частковий приклад реультату:
//
//
function users(user, address) {
    for (let i = 0; i < user.length; i++) {
        for (let j = 0; j < address.length; j++) {
            if (user[i].id === address[j].user_id) {
                user[i].address = address[j]
            }
        }
    }
}
users(usersWithId,citiesWithId);
console.log(usersWithId);


//
//     ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
function rule(array) {
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement('div');
        let ruleNum = document.createElement('h2');
        ruleNum.innerText = array[i].title;
        div.appendChild(ruleNum);
        let ruleTxt = document.createElement('p');
        ruleTxt.innerText = array[i].body;
        div.appendChild(ruleTxt);
        document.body.appendChild(div)
    }
}
rule(rules)

// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
//     Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!
//
//     2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========
