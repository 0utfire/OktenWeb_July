// - створити функцію яка виводить масив

function showarr(array) {
    for (const i of array) {
        console.log(i);

    }
}
showarr([2,3,6,7,2,3,6,65])

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function random() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    showarr(arr);
};


// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function trimin(a, b, c) {
    console.log(Math.min(a, b, c));
    return Math.min(a, b, c)
}

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function trimax(num1, num2,) {
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
arraymax([2,3,6,7,2,3,6,65])

// - створити функцію яка повертає найменьше число з масиву

function arraymin(array) {
    return Math.min(...array)
}
arraymin([2,3,6,7,2,3,6,65])

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function arraysum(array) {
    let sum=0
    for (const i of array) {
        sum+=i
    }
    return sum
}
console.log(arraysum([2,3,6,7,2,3,6,65]));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function arraymean(array) {
    let sum=0
    for (const i of array) {
        sum+=i
    }
    sum=sum/array.length
    return sum
}
console.log(arraymean([2,8,2,4]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

function objnum(arrayOfObjects) {
    return arrayOfObjects.length
}
console.log(
objnum([
    1, 3, false, {num:2, l:'fsfd'}, 'dfdsg'
])
);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function fieldNum(arrayOfObjects) {
    let fields=0
    for (const obj of arrayOfObjects) {
        fields+=Object.keys(obj).length;

        // for(let key of obj){
            
        }
    }
    return fields
}

console.log(fieldNum([
    {n:1,
    b:4,
    gg:'fdfd'},
    {32:'fgd',
    gfgf:12,},
    {'fdsf':22,
    'rere':true,
    33:99,
    'rre':3,
    3333:'1343'}
]));


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function sumOfArrays(array1, array2) {
    let array3=[];
    for (let i = 0; i < array.length; i++) {
        array3[i]=array1[i]+array2[i]
        
    }
    return array3
}

console.log(sumOfArrays([1,2,3],[3,2,1])
);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]