// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

let text = document.getElementById('content');
console.log(text.innerText);


// - отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules.innerText);
// - замініть текст параграфа з id 'content' на будь-який інший

let contentText = document.getElementById('content');
contentText.innerText = 'Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :'

// - замініть текст параграфа з id 'rules' на будь-який інший

let rulesText = document.getElementById('rules');
rulesText.innerText = 'Learn Git and GitHub without any code Using the Hello World guide, you’ll start a branch, write comments, and open a pull request'

// - змініть кожному елементу колір фону на червоний

let allE = document.body.getElementsByTagName('*');
for (const i of allE) {
    i.style.backgroundColor = 'red'
};

// - змініть кожному елементу колір тексту на синій

for (const i of allE) {
    i.style.color = 'blue'
};

// - отримати весь список класів елемента з id=rules і вивести їх в console.log

let idRules = document.getElementById('rules');
console.log(idRules.className);


// - отримати всі елементи з класом fc_rules

console.log(document.getElementsByClassName('fc_rules'));


// - поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRules=document.getElementsByClassName('fc_rules')
for (const text of fcRules) {
    text.style.color='yellow'
}

// ====================
// ====================
// ====================