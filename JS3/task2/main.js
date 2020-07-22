// 1 - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let worker = {
//     occupation: 'builder',
//     experience: '5',
//     position: 'senior'
// };
// let teacher = {
//     subject: 'math',
//     degree: 'PhD',
//     university: 'NULP'
// };
// let apple = {
//     color: 'green',
//     weight: '200 g',
//     price: '10'
// };
// let university = {
//     city: 'Lviv',
//     status: 'National',
//     students: 50000
// };
// let student = {
//     name: 'Andriy',
//     major: 'history',
//     year: 3
// };

// 2 - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let car = {
//     brand: 'Audi',
//     engine: ['petrol', 'electric'],
//     collaboration: {
//         sound: 'Harman Kardon',
//         screen: 'Samsung'
//     }
// };
//
// let flat = {
//     city: 'Lviv',
//     rooms: ['kitchen', 'living room', 'bedroom'],
//     dimensions: {
//         height: 2.3,
//         length: 6,
//         wight: 8
//     }
// };
//
// let book = {
//     title: 'Harry Potter',
//     author: 'J.K. Rowling',
//     characters: ['Harry Potter', 'Ron Weasley', 'Hermione Granger'],
//     physical: {
//         pages: 250,
//         thickness: 1.44,
//         weight: 0.34
//     }
// };
// let dog = {
//     name: 'Rexar',
//     gender: 'male',
//     breed: ['shepherd', 'retriever'],
//     condition: {
//         age: 5,
//         vaccination: 'all'
//     }
// };
// let developer = {
//     company: 'EPAM',
//     skills: ['java', 'js'],
//     project: {
//         client: 'ABTO Software',
//         budget: 25000,
//         lead: 'Anton'
//     }
// };

// 3 - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (const workerKey in worker) {
//     console.log(workerKey);
// }
// for (const teacherKey in teacher) {
//     console.log(teacherKey);
// }
// for (const appleKey in apple) {
//     console.log(appleKey);
// }
// for (const universityKey in university) {
//     console.log(universityKey);
// }
// for (const studentKey in student) {
//     console.log(studentKey);
// }
// for (const carKey in car) {
//     console.log(carKey);
// }
// for (const flatKey in flat) {
//     console.log(flatKey);
// }
// for (const bookKey in book) {
//     console.log(bookKey);
// }
// for (const dogKey in dog) {
//     console.log(dogKey);
// }
// for (const developerKey in developer) {
//     console.log(developerKey);
// }

// 4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// console.log(Object.keys(worker))
// console.log(Object.keys(teacher))
// console.log(Object.keys(apple))
// console.log(Object.keys(university))
// console.log(Object.keys(student))
// console.log(Object.keys(car))
// console.log(Object.keys(flat))
// console.log(Object.keys(book))
// console.log(Object.keys(dog))
// console.log(Object.keys(developer))

// 5 - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

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
//     car10 = {model: 'Infiniti', year: 2012, power: 480, color: 'green'},
// ]

// 6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

// let cities=[
//     city1={title: 'Kyiv', population: 1.2, country: 'UA', region: 'Europe'},
//     city1={title: 'Madrid', population: 4.2, country: 'ES', region: 'Europe'},
//     city1={title: 'Paris', population: 3.5, country: 'FR', region: 'Europe'},
//     city1={title: 'London', population: 5.2, country: 'GB', region: 'Europe'},
//     city1={title: 'Lviv', population: 1, country: 'UA', region: 'Europe'},
//     city1={title: 'New York', population: 12, country: 'US', region: 'America'},
//     city1={title: 'Detroit', population: 7, country: 'US', region: 'America'},
//     city1={title: 'Moscow', population: 7.5, country: 'RU', region: 'Europe'},
//     city1={title: 'Berlin', population: 5, country: 'DE', region: 'Europe'},
//     city1={title: 'Tokyo', population: 15, country: 'JP', region: 'Asia'}
// ]

// 7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let cars1 = [
//     car1 = {model: 'tesla', year: 2019, power: 400, color: 'black', driver:{name: 'Ivan', age: 20, gender: 'male', exp: 4 }},
//     car2 = {model: 'fait', year: 2016, power: 140, color: 'blue', driver:{name: 'Anton', age: 25, gender: 'male', exp: 8 }},
//     car3 = {model: 'WV', year: 2013, power: 450, color: 'grey', driver:{name: 'Alina', age: 29, gender: 'female', exp: 2 }},
//     car4 = {model: 'Suzuki', year: 2011, power: 200, color: 'brown', driver:{name: 'Max', age: 40, gender: 'male', exp: 11 }},
//     car5 = {model: 'Toyota', year: 2010, power: 500, color: 'yellow', driver:{name: 'Andriy', age: 30, gender: 'male', exp: 5 }},
//     car6 = {model: 'Nissan', year: 2020, power: 100, color: 'red', driver:{name: 'Roman', age: 34, gender: 'male', exp: 14 }},
//     car7 = {model: 'Mazda', year: 2015, power: 120, color: 'purple', driver:{name: 'Karina', age: 25, gender: 'female', exp: 8 }},
//     car8 = {model: 'SEAT', year: 2018, power: 800, color: 'white', driver:{name: 'John', age: 21, gender: 'male', exp: 20 }},
//     car9 = {model: 'Porsche', year: 2019, power: 430, color: 'cream', driver:{name: 'Maria', age: 55, gender: 'female', exp: 3 }},
//     car10 = {model: 'Infiniti', year: 2012, power: 480, color: 'green', driver:{name: 'Ben', age: 23, gender: 'male', exp: 1 }},
// ]

// 8 - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i=0;
// while (i < cars.length) {
//     console.log(cars[i]);
//     i++
// }
// i=0
// while (i < cities.length) {
//     console.log(cities[i]);
//     i++
// }
// i=0
// while (i < cars1.length) {
//     console.log(cars1[i]);
//     i++
// }

// 9 - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }
// for (let i = 0; i < cars1.length; i++) {
//     console.log(cars1[i]);
// }

// 10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const car of cars) {
//     console.log(car);
// }
// for (const city of cities) {
//     console.log(city);
// }
// for (const cars1Element of cars1) {
//     console.log(cars1Element);
// }

// 11 - взять объекты из задания 1 и превратить каждый в json.
// 12 - взять json из задания 11 и превратить их обратно в объекты.

// let workerjs = JSON.stringify(worker);
// let teacherjs = JSON.stringify(teacher);
// let applejs = JSON.stringify(apple);
// let universityjs = JSON.stringify(university);
// let studentjs = JSON.stringify(student);
//
// let workerP=JSON.parse(workerjs);
// let teacherP=JSON.parse(teacherjs);
// let appleP=JSON.parse(applejs);
// let universityP=JSON.parse(universityjs);
// let studentP=JSON.parse(studentjs);

// 13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (let i = 0; i < cars.length; i++) {
//     cars[i]=JSON.stringify(cars[i])
// }
// console.log(cars);

// 14 - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (let i = 0; i < cities.length; i++) {
//     cities[i]=JSON.stringify(cities[i])
// }
// console.log(cities);

// 15 - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newcars1=[];
// for (let i = 0; i < cars1.length; i++) {
//     newcars1.push(JSON.stringify(cars1[i]))
// }
// console.log(newcars1);

// 16 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// 17 - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

//  let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         skills: ['java', 'js']
//     },
//     {
//         name: 'petya',
//         age: 30,
//         skills: ['java', 'js', 'html']
//     },
//     {
//         name: 'kolya',
//         age: 29,
//         skills: ['mysql', ',mongo']
//     }
// ]

// 16
// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }

// 17
// let skills=[];
// for (const user of users) {
//     console.log(user);
//     skills.push(user.skills)
//
// }
// console.log(skills);

//
// 19 - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

// let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         status: false,
//         skills: ['java', 'js']
//     },
//     {
//         name: 'petya',
//         age: 30,
//         status: true,
//         skills: ['java', 'js', 'html']
//     },
//     {
//         name: 'kolya',
//         age: 29,
//         status: true,
//         skills: ['mysql', ',mongo']
//     },
//     {
//         name: 'olya',
//         age: 28,
//         status: false,
//         skills: ['java', 'js']
//     },
//     {
//         name: 'max',
//         age: 30,
//         status: true,
//         skills: ['mysql', ',mongo']
//     }];

// for (const user of users) {
//     console.log(user);
//     for (const skill of user.skills) {
//         console.log(skill);
//     }
// }


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// 24 - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let addresses = [];
// for (const user of users) {
//     addresses.push(user.address.country, user.address.city, user.address.street, user.address.houseNumber)
// }
// console.log(addresses);

// 25 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let userDiv = document.createElement("div");
//     userDiv.innerText = `${user.name} ${user.age} ${user.status} ${user.address.country} ${user.address.city} ${user.address.street} ${user.address.houseNumber}`;
//     document.body.appendChild(userDiv)
// }

// 26 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     let outerDiv = document.createElement("div");
//     for (const userKey in user) {
//         let keyDiv = document.createElement('div')
//         keyDiv.innerText = `${user[userKey]}`
//         outerDiv.appendChild(keyDiv)
//     }
//     document.body.appendChild(outerDiv)
// }


// 27 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {
//     let outerDiv = document.createElement("div");
//     for (const userKey in user) {
//         if (typeof user[userKey] !== 'object') {
//             let keyDiv = document.createElement('div');
//             keyDiv.innerText = `${user[userKey]}`;
//             outerDiv.appendChild(keyDiv);
//         }else {
//             let addDiv= document.createElement('div');
//
//             for (const addressKey in user.address) {
//                 let addressDiv =document.createElement('div');
//                 addressDiv.innerText=`${user.address[addressKey]}`;
//                 addDiv.appendChild(addressDiv)
//             }
//             outerDiv.appendChild(addDiv);
//         }
//     }
//     document.body.appendChild(outerDiv)
// }
//
// ^ не впевнений чи правильно зробив - хоча результат правильний


//
// 87 - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false},
//     ];
//     let citiesWithId = [
//         {user_id: 3, country: 'USA', city: 'Portland'},
//         {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//         {user_id: 2, country: 'Poland', city: 'Krakow'},
//         {user_id: 4, country: 'USA', city: 'Miami'},
//     ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
//     let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
//

// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId[i].id===citiesWithId[j].user_id) {
//             usersWithId[i].address=citiesWithId[j]
//         }
//     }
// }
// console.log(usersWithId);



// 100 - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// let divId = document.getElementById('pointer');
// console.log(divId.innerText);
//
// let divClass = document.getElementsByClassName('text')
// for (const divclass1 of divClass) {
//     console.log(divclass1.innerText);
// }
//
// let divTag = document.getElementsByTagName('div')
// for (const divTagElement of divTag) {
//     console.log(divTagElement.innerText);
// }

// 101 - змінити цей текст використовуючи селектори id, class,  tag

// document.getElementById('pointer').innerText = 'змінити цей текст використовуючи селектори id';

// for (const i of document.getElementsByClassName('text')) {
//         i.innerText='змінити цей текст використовуючи селектори class'
// }

// document.getElementsByTagName('div')[0].innerText = 'змінити цей текст використовуючи селектори div';


// 102 - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let divId = document.getElementById('pointer');
// divId.style.width = '500px';
// divId.style.height = '500px';

// for (const i of document.getElementsByClassName('text')) {
//     i.style.height = '500px';
//     i.style.width = '500px';
// }
//
// for (const i of document.getElementsByTagName('div')) {
//     i.style.height = '500px';
//     i.style.width = '500px';
// }

// 103 - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement('div');
// table.style.border = '2px solid black';
// table.style.backgroundColor='silver';
// table.style.height='fit-content';
// table.style.width='fit-content';
// for (let i = 0; i < 3; i++) {
//     let cell = document.createElement('div');
//     cell.style.height = '40px';
//     cell.style.width = '90px';
//     cell.style.border = '1px solid black';
//     cell.style.display='inline-block';
//     table.appendChild(cell)
// }
// document.body.appendChild(table)

// 104 - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let table = document.createElement('div');
// table.style.border = '2px solid black';
// table.style.backgroundColor='silver';
// table.style.height='fit-content';
// table.style.width='fit-content';
//
// for (let i = 0; i < 3; i++) {
//     let cell = document.createElement('div');
//     cell.style.height = '40px';
//     cell.style.width = '90px';
//     cell.style.border = '1px solid black';
//     cell.style.display='inline-block';
//     table.appendChild(cell)
// }
// document.body.appendChild(table)

// ^ це я пробував просто DIVами зробити табличку


// 105 - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let table1 = document.createElement('table');
// for (let i = 0; i < 10; i++) {
//     let row = document.createElement('tr')
//     for (let j = 0; j <5; j++) {
//         let cell= document.createElement('td')
//         cell.style.height='20px';
//         cell.style.width='40px';
//         cell.style.border='1px solid black';
//         row.appendChild(cell)
//     }
//     table1.appendChild(row);
// }
// document.body.appendChild(table1);


// 106 - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// let table2 = document.createElement('table');
// table2.style.border='1px solid black';
// let n = prompt('Введіть кількість рядків');
// let m = prompt('Введіть кількість стовбців');
// for (let i = 0; i < parseInt(n); i++) {
//     let row = document.createElement('tr');
//     for (let j = 0; j < parseInt(m); j++) {
//         let cell = document.createElement('td')
//         cell.style.height = '20px';
//         cell.style.width = '40px';
//         cell.style.border = '1px solid black';
//         row.appendChild(cell)
//     }
//     table2.appendChild(row);
// }
// document.body.appendChild(table2);


// 108 - Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії



// 109 - знайти всі елементі, які мають class

// let classes = document.body.getElementsByTagName('*');
// // console.log(classes);
// for (const class1 of classes) {
//     if (class1.className) {
//         console.log(class1);
//     }
// }

// 110 - знайти всі параграфи ,та змінити текст на hello oktenweb!

// let para = document.getElementsByTagName('p');
// for (const paraElement of para) {
//     paraElement.innerText = 'hello oktenweb';
// }

// 111 - знайти всі div та змінити ім колір на червоний

// let divs = document.getElementsByTagName('div');
// for (const div of divs) {
//     div.style.backgroundColor = 'red';
// }


//


// ============
// ====class===
//     ============
//
//     - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


// let headers = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let ul=document.createElement('ul');
// for (const header of headers) {
//     let li = document.createElement('li');
//     li.innerText = header.innerText;
//     ul.appendChild(li);
// }
// content.appendChild(ul);

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

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// for (let i = 0; i < rules.length; i++) {
//     let div = document.createElement('div');
//     div.classList.add('rules', `rule${i}`);
//         let ruleNum = document.createElement('h2');
//         ruleNum.innerText = rules[i].title;
//         div.appendChild(ruleNum);
//         let ruleTxt = document.createElement('p');
//         ruleTxt.innerText = rules[i].body;
//         div.appendChild(ruleTxt);
//     document.body.appendChild(div)
// }


//
//
//
//
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту