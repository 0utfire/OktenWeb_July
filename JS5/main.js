//
//
// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================

function Attributes(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr
}

function Tag(titleOfTag, action, Attributes) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.Attributes = Attributes
}


let aTag = new Tag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', ['accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'href', 'Задает адрес документа, на который следует перейти.'])

console.log(aTag);


// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
//

class Tag1 {
    constructor(titleOfTag, action, [titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2]) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.titleOfAttr1 = titleOfAttr1;
        this.actionOfAttr1 = actionOfAttr1;
        this.titleOfAttr2 = titleOfAttr2;
        this.actionOfAttr2 = actionOfAttr2
    }
}

let aTag1 = new Tag1('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', ['accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'href', 'Задает адрес документа, на который следует перейти.'])

console.log(aTag1);

//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
let car1 = {
    model: null,
    manufacturer: null,
    year: null,
    maxspeed: null,
    V: null,
    drive() {
        console.log(`їдемо зі швидкістю ${car1.V} на годину`)
    },
    info() {
        console.log(car1);
    },
    increaseMaxSpeed(newspeed){
        car1.maxspeed += newspeed
    },
    changeYear(newValue){
        car1.year = newValue
    },
    addDriver(driver) {
    car1.driver = driver
    }
}

addDriver({name: 'andriy', surname: 'kosanyak'})
info()

// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function Car(model, manufacturer, year, maxspeed, V) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.V = V;
    this.driver = null;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.V} на годину`)
    }
    this.info = function () {
        console.log(this);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed += newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.addDriver = function (driver) {
        this.driver = driver
        // Object.assign(this, driver)
    }
}

let car = new Car('bmw', '123', 2011, 300, 4);
car.addDriver({name: 'ivan', surname: 'taras'})
car.info()


//
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//

class Cinderella {
    constructor(name, age, feet) {
        this.name = name;
        this.age = age;
        this.feet = feet;
    }
}

let Maria = new Cinderella('Maria', 20, 33);
let Anna = new Cinderella('Anna', 21, 34);
let Katya = new Cinderella('Katya', 22, 35);
let Janna = new Cinderella('Janna', 23, 36);
let Olya = new Cinderella('Olya', 24, 37);
let Lesya = new Cinderella('Lesya', 25, 38);
let Maryna = new Cinderella('Maryna', 26, 39);
let Natali = new Cinderella('Natali', 27, 40);
let Zhenya = new Cinderella('Zhenya', 28, 29);
let Karina = new Cinderella('Karina', 29, 30);


let cinder = [Maria, Anna, Katya, Janna, Olya, Lesya, Maryna, Natali, Zhenya, Karina]

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Anton', 28, 35)

for (const elem of cinder) {
    // console.log(elem.feet);
    // console.log(prince.shoe);
    if (elem.feet===prince.shoe) {
        console.log(elem.name)
    }
        }

//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
