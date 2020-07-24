//
// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// let myform = document.createElement('form');
// myform.name = 'my_form';
// let textarea = document.createElement('input');
// textarea.name = 'input';
// textarea.type = 'text';
// textarea.style.width = '300px';
// textarea.style.height = '200px';
// myform.appendChild(textarea);
// document.body.appendChild(myform);
//
// textarea.value = localStorage.getItem('text');
// textarea.oninput = (ev) => {
//     console.log(ev);
//     localStorage.setItem('text', ev.target.value)
// }

//
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// let myForm = document.forms.myForm;
//
// myForm.input1.oninput = () => localStorage.setItem(myForm.input1.name, myForm.input1.value());
// myForm.input2.oninput = () => localStorage.setItem(myForm.input2.name, myForm.input2.value());
// myForm.rad.on localStorage.setItem('radiobutton', document.forms.myForm.elements.rad.value);
//
//
//
//
//     for (const element of myForm) {
//     // console.log(element.type);
//     if (element.type === 'checkbox'){
//         localStorage.setItem(element.name, element.checked)
//         console.log(element.checked);
//         console.log(element.type);
//     }else {
//         localStorage.setItem(element.name, element.value)
//         console.log(element.value);
//         console.log(element.type);
//     }
//     // localStorage.setItem(element.name, element.value)
// }


//
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).


let myform1 = document.createElement('form');
myform1.name = 'my_form';
let textarea = document.createElement('input');
textarea.name = 'input';
textarea.type = 'text';
textarea.style.width = '300px';
textarea.style.height = '200px';
myform1.appendChild(textarea);
document.body.appendChild(myform1);

let btn = document.createElement("button");
btn.innerText = 'SAVE';
i=0;
btn.onclick = () => {
    localStorage.setItem(i, textarea.value);
    i++;
}
let prev = document.createElement("button");
prev.innerText = 'Previous';
let next = document.createElement("button");
next.innerText = 'Next';

prev.onclick = 


document.body.appendChild(btn);
document.body.appendChild(prev);
document.body.appendChild(next);

// textarea.value = localStorage.getItem('text');
// textarea.oninput = (ev) => {
//     console.log(ev);
//     localStorage.setItem('text', ev.target.value)
// }


//
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
//
//
//
