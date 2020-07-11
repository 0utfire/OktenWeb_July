
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let dog = {
    name: 'sharik',
    gender: 'male',
    age: 10,
    owned: true,
    breed: 'shepherd',
};

let human = {
    name: 'Andriy',
    gender: 'male',
    age: 21,
    married: false,
    occupation: 'student'
};

let car = {
    brand: 'Fiat',
    year: 2011,
    transmission: 'manual',
    gear: 5,
    fuel: 'petrol'
};

let flat = {
    city: 'Lviv',
    rooms: 5,
    area: 250,
    floor: 3,
    price: 25000
};

let book = {
    name: 'Harry Potter',
    author: 'J.K. Rowling',
    year: 2020,
    pages: 250,
    price: 150
}

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let dogs = ['dog1', 'dog2', 'dog3', 'dog4', 'dog5']
// console.log(dogs);
// let humans = ['Adnriy', 'Roman', 'Sergiy', 'Yuriy', 'Ruslan']
// console.log(humans);
// let cars=['Fiat', 'WV', 'Audi', 'BMW', 'Jeep']
// console.log(cars);


// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let house = {
    address: 'Antonovycha',
    rooms: ['kitchen', 'living room', 'bedroom'],
    owner: {
        name: 'Roman',
        surname: 'Romanyuk'
    },
    floors: 5,
    state: 'new'
}

// Дан массив:
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія

// for (const user of users) {
//     if (user.name=='andrey') {
//         console.log(user.status);
//     }
// }


// - статус Максима

// for (const user of users) {
//     if (user.name=='max') {
//         console.log(user.status);
//     }
// }


// - ім'я передостаннього об'єкту

// console.log(users[users.length-2].name);


// - ім'я третього об'єкта

// console.log(users[2].name);


// - вік Олега


// for (const user of users) {
//     if (user.name=='oleg') {
//         console.log(user.age);
//     }
// }

// - вік Олі

// for (const user of users) {
//     if (user.name=='olya') {
//         console.log(user.age);
//     }
// }

// - вік + ім'я 5го об'єкта

// console.log(users[4].name, users[4].age);

// - вік + сатус Анни


// for (const user of users) {
//     if (user.name=='anya') {
//         console.log(user.age, user.status);
//     }
// }


// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

