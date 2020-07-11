// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

document.getElementById('main_header').style.color = 'green';

// -- робить шириниу елементу ul 400 пікселів

for (const i of document.getElementsByTagName('ul')) {
    i.style.width = '400px'
}

// -- робить шириниу всіх елементів з класом linkList шириною 50%

for (const i of document.getElementsByClassName('linkList')) {
    i.style.width = '50%'
}

// -- отримує текст який зберігається в елементі з класом listElement2

let textList = ''
for (const i of document.getElementsByClassName('listElement2')) {
    textList += i.innerText
}
console.log(textList);


// -- отримує всі елементи li та змінює ім колір фону на сірий

for (const i of document.getElementsByTagName('li')
    ) {
    i.style.backgroundColor = 'silver'
}

// -- отримує всі елементи 'a' та додає їм клас anchor

for (const i of document.getElementsByTagName('a')) {
    i.classList.add('anchor')
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (const i of document.getElementsByTagName('a')) {
    if (i.innerText === 'link3') {
        i.style.fontSize = '40px'
    }
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const i of document.getElementsByTagName('a')) {
    i.classList.add(`element_${i.innerText}`)
}

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// for (const i of document.getElementsByClassName('sub-header')) {
//     i.style.backgroundColor=prompt('Enter desired color')
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (const i of document.getElementsByClassName('sub-header')) {
//     if (i.innerText === 'content 2 segment') {
//         i.style.color = prompt('Enter desired color')
//     }
// }
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// for (const i of document.getElementsByClassName('content_1')) {
//     i.innerText = prompt('Enter text')
// }

// -- отримати елементи p та змінити їм paddin на довільне значення

for (const i of document.getElementsByTagName('p')) {
    i.style.padding = '50px';
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
for (const i of document.getElementsByClassName('text2')) {
    i.innerText='TEXXXXXT'
}