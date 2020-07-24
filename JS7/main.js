//     - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//

// let text = document.getElementById('text');
// text.onclick = () => text.style.display = 'none';

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.innerText='Some action';
// button.onclick = () => button.style.display = 'none';
// document.body.appendChild(button);


//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


// !!!!!!!!!!!!ПОЧИТАТИ ВЛАСТИВОСТІ ФОРМИ!!!!!!!!!!
//
// let form= document.createElement('form');
// let input = document.createElement('input');
// input.type='text';
// input.placeholder='Your age';
// input.name='text';
// form.appendChild(input);
//
// let button = document.createElement('button');
// button.innerText='Check age';
// button.onclick = () => {
//     (+input.value < 18 ? alert('You are younger than 18') : alert('You are older than 18'))
// };
// document.body.appendChild(form);
// document.body.appendChild(button);

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let label = document.createElement('label');
// label.innerText='Chose an option \n';
// let select = document.createElement('select')
// for (let i = 0; i < 5; i++) {
//     let option = document.createElement('option');
//     option.text= `Option ${i+1}`;
//     select.add(option);
// }
// document.body.appendChild(label);
// document.body.appendChild(select);

// let btn = document.createElement('button');
// btn.innerText='Show/hide';
// let ul= document.createElement('ul');
// for (let i = 0; i < 3; i++) {
//     let li = document.createElement('li')
//     li.innerText= `Option ${i + 1}`;
//     ul.appendChild(li)
// }
// btn.onclick = () => {
//     ul.style.display = (ul.style.display === 'none') ? '' : 'none'
// }
// document.body.appendChild(btn);
// document.body.appendChild(ul);



//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let comments = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem5', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem6', body: 'lorem ipsum dolo sit ameti'},
// ]
//
// let wrapper = document.createElement('div');
// for (const comment of comments) {
//     let commDiv = document.createElement('div');
//     let title = document.createElement('h2');
//     title.innerText = comment.title;
//     title.style.display = 'inline-block';
//     title.style.paddingRight = '5px';
//     let btn = document.createElement('button');
//     btn.innerText = '+';
//     btn.style.display = 'inline-block';
//     let body = document.createElement('div');
//     body.style.display = 'none';
//     body.innerText = comment.body;
//     btn.onclick = () => {
//         if (body.style.display === 'none') {
//             body.style.display = '';
//             btn.innerText = '-';
//         } else {
//             body.style.display = 'none';
//             btn.innerText = '+';
//
//         }}
//     commDiv.appendChild(title);
//     commDiv.appendChild(btn);
//     commDiv.appendChild(body);
//     wrapper.appendChild(commDiv)
// }
// document.body.appendChild(wrapper);

//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.






// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.


// function tableGen(rows, columns, element) {
//     let elem = document.createElement(element);
//     let table = document.createElement("table");
//     table.style.border = 'ipx solid black';
//     for (let i = 0; i < rows; i++) {
//         let row = document.createElement("tr");
//         for (let j = 0; j < columns; j++) {
//             let column = document.createElement("td");
//             column.style.height = '20px';
//             column.style.width = '40px';
//             column.style.border = '1px solid black';
//             row.appendChild(column);
//         }
//         table.appendChild(row);
//     }
//
//     elem.appendChild(table);
//     document.body.appendChild(elem);
// }
//
// tableGen(4,8, 'p');

//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// let inputRow = document.createElement("input");
// let inputCell = document.createElement("input");
// let inputValue = document.createElement("input");
// let btn = document.createElement('button');
// btn.innerText = 'SAVE';
//
// document.body.appendChild(inputRow);
// document.body.appendChild(inputCell);
// document.body.appendChild(inputValue);
// document.body.appendChild(btn);
//
// btn.onclick = () => {
//     let table = document.createElement('table');
//     for (let i = 0; i < +inputRow.value; i++) {
//         let row = document.createElement("tr");
//         for (let j = 0; j < +inputCell.value; j++) {
//             let column = document.createElement("td");
//             column.style.height = '20px';
//             column.style.width = '40px';
//             column.style.border = '1px solid black';
//             column.innerText = inputValue.value;
//             row.appendChild(column);
//         }
//         table.appendChild(row);
//     }
//     document.body.appendChild(table);
//
// }

// (Додатковачастина для завдання)
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.



//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let censored = ['shit', 'piss', 'cunt', 'fuck', 'cocksucker', 'tits', 'motherfucker'];
// let input = document.createElement('input');
// input.type='text';
// document.body.appendChild(input);
// let btn = document.createElement('button');
// btn.innerText = 'Check word';
// document.body.appendChild(btn);
// btn.onclick = () => {
//     if (censored.includes(input.value)) {
//         alert('This word is censored')
//     }
// }


//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let censored = ['shit', 'piss', 'cunt', 'fuck', 'cocksucker', 'tits', 'motherfucker'];
// let input = document.createElement('input');
// input.type='text';
// document.body.appendChild(input);
// let btn = document.createElement('button');
// btn.innerText = 'Check word';
// document.body.appendChild(btn);
// btn.onclick = () => {
//     for (const word of input.value.split(/\.|\s/g)) {
//         console.log(word);
//         if (censored.includes(word)) {
//             alert(`Word ${word} is censored`)
//         }
//     }
// }

//
// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте




//
// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
//
