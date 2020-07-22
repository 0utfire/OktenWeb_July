//
// - создать массив с 20 числами.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 20, 54, 23, 88, 55, 100, 44, 398, -1, 0]

// -- при помощи метода sort и колбека  отсортировать массив.
//
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
// numbers.sort((a, b) => b-a);
// console.log(numbers);

// -- при помощи filter получить числа кратные 3

// let filter = numbers.filter(number => (number % 3 === 0));
// console.log(filter);

// -- при помощи filter получить числа кратные 10

// let filter10 = numbers.filter(number => (number % 10 === 0));
// console.log(filter10);

// -- перебрать (проитерировать) массив при помощи foreach()

// numbers.forEach(number => console.log(number));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let map = numbers.map(number => (number * 3));
// console.log(map);

//
// - создать массив со словами на 15-20 элементов.

let words = ['producer', 'subaru', 'model', 'wrx', 'year', 'color', 'blue', 'type', 'sedan', 'engine', 'volume', 'power', 'street', 'city', 'name', 'surname', 'song']

// -- отсортировать его по алфавиту в восходящем порядке.

// console.log(words.sort());

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let sortedwords = words.sort((a, b) => (a > b) ? -1 : 1);
// console.log(sortedwords);

// -- отфильтровать слова длиной менее 4х символов

// let filtered = words.filter(word => word.length <= 4);
// console.log(filtered);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let map = words.map(word => word + '!')
// console.log(map);

//
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// users.sort((a, b) => a.age - b.age);
// console.log(users);
//
// users.sort((a, b) => b.age - a.age);
// console.log(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);
//
// users.sort((a, b) => b.name.length - a.name.length);
// console.log(users);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let newUsers = users.forEach(user => user.id = '');
// // let i = 1;
// let newUsers = [];
// users.forEach(function (user) {
//     // user.id = i;
//     // i++;
//     user.id = Math.floor(Math.random() * 100)
//     newUsers.push(user)
// });
// console.log(newUsers);

// - відсортувати його за індентифікатором

// newUsers.sort((a, b) => a.id - b.id);

//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком

// function cal(num1, num2,operation, callback) {
//     if()
//      callback(num1 +num2)
//
// }
//
// cal(5, 6, '+',result => {
//
// })


// -- наисать функцию калькулятора с 3мя числами и колбеком
//
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
//
//
//
let cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }];
// Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів
// let carsV3 = cars.filter(car => car.volume >= 3);
// console.log(carsV3);
// // - двигун = 2л
//
// let carsV2 = cars.filter(car => car.volume === 2);
// console.log(carsV2);
//
// // - виробник мерс
//
// let carsMerc = cars.filter(car => car.producer === 'mercedes');
// console.log(carsMerc);
//
// // - двигун більше 3х літрів + виробник мерседес
//
// let carsV3Merc = cars.filter(car => (car.producer === 'mercedes') && (car.volume >= 3));
// console.log(carsV3Merc);
//
// // - двигун більше 3х літрів + виробник субару
//
// let carsV3Subaru = cars.filter(car => (car.producer === 'subaru') && (car.volume >= 3));
// console.log(carsV3Subaru);
//
// // - сили більше ніж 300
//
// let carsP300 = cars.filter(car => car.power > 300);
// console.log(carsP300);
//
// // - сили більше ніж 300 + виробник субару
//
// let carsP300Subaru = cars.filter(car =>  (car.producer === 'subaru') && (car.power > 300));
// console.log(carsP300Subaru);
//
// // - мотор серіі ej
//
// let carsEngineEJ = cars.filter(car => car.engine.startsWith('ej'));

// let carsEngineEJ = cars.filter(function (car) {
//     return car.engine.startsWith('ej')
//
// })

// console.log(carsEngineEJ);
//
// // - сили більше ніж 300 + виробник субару + мотор серіі ej
//
// let carsEngineEJSubaru300 = cars.filter(car => (car.engine.startsWith('ej')) && (car.producer === 'subaru') && (car.power > 300));
// console.log(carsEngineEJSubaru300);
//
// // - двигун меньше 3х літрів + виробник мерседес
//
// let carsV3lMerc = cars.filter(car => (car.producer === 'mercedes') && (car.volume < 3));
// console.log(carsV3lMerc);
//
// // - двигун більше 2л + сили більше 250
//
// let carsP250V2 = cars.filter(car =>  (car.volume > 2) && (car.power > 250));
// console.log(carsP250V2);
//
// // - сили більше 250  + виробник бмв
//
// let carsP250BMV = cars.filter(car =>  (car.producer === 'bmw') && (car.power > 250));
// console.log(carsP250BMV);

//
//
// - взять слдующий массив

let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];


// -- отсортировать его по id пользователей

// usersWithAddress.sort((a, b) => (a.id) - (b.id));
// console.log(usersWithAddress);

// -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((a, b) => (b.id) - (a.id));
// console.log(usersWithAddress);
// -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((a, b) => (a.age) - (b.age));
// console.log(usersWithAddress);
// -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((a, b) => (b.age) - (a.age));
// console.log(usersWithAddress);
// -- отсортировать его по имени пользователей
// usersWithAddress.sort((a, b) => (a.name < b.name) ? -1 : 1);
// console.log(usersWithAddress);
// -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((a, b) => (a.name > b.name) ? -1 : 1);
// console.log(usersWithAddress);
// -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((a, b) => (a.address.street < b.address.street) ? -1 : 1);
// console.log(usersWithAddress);
// -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((a, b) => (a.address.number) - (b.address.number));
// console.log(usersWithAddress);
// -- отфильтровать (оставить) тех кто младше 30
let users30 = usersWithAddress.filter(user => user.age < 30);
console.log(users30);
// -- отфильтровать (оставить) тех у кого отрицательный статус
let usersNegative = usersWithAddress.filter(user => user.status === false);
console.log(usersNegative);
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let users30Negative = usersWithAddress.filter(user => (user.status === false) && (user.age < 30));
console.log(users30Negative);
// -- отфильтровать (оставить) тех у кого номер дома четный
let usersHouse = usersWithAddress.filter(user => !(user.address.number % 2));
console.log(usersHouse);
//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//
