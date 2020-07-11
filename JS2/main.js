// --створити масив та вивести його в консоль:
// - з 5 числових значень

// let arr1= [1,2,3,4,5]
// console.log(arr1);

// - з 5 стічкових значень

// let arr=['qwe','rty', 'asd', 'fgh', 'zxc']
// console.log(arr)

// - з 5 значень стрічкового, числового та булевого типу

// let arr =[1,3, 'tret', 'dfsdf', true];
// console.log(arr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0]=true;
// arr[2]='arer';
// arr[5]=3;
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Block ${i}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// i=0
// while (i<20) {
//     document.write( `<h1>OktenWeb ${i}</h1> `)
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const i of arr) {
//     console.log(i);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.


// let arr = ['qwe', 'qwe1', 'qwe2', 'qwe3', 'qwe4', 'qwe5', 'qwe6', 'qwe7', 'qwe8', 'qwe9'];
// for (const i of arr) {
//     console.log(i);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr=[123, 'qwe', true, false, 123.2, 'fdfs', 'q', 45, true, '3424', '0', null];
// let i=0;
// while (i<arr.length) {
//     console.log(arr[i]);
//     i++
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr=[123, 'qwe', true, false, 123.2, 'fdfs', 'q', 45, true, '3424', '0', null];
// for (const i of arr) {
//     if (typeof i === "boolean") {
//         console.log(i);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr=[123, 'qwe', true, false, 123.2, 'fdfs', 'q', 45, true, '3424', '0', null];
// for (const i of arr) {
//     if (typeof i === "number") {
//         console.log(i);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr=[123, 'qwe', true, false, 123.2, 'fdfs', 'q', 45, true, '3424', '0', null];
// for (const i of arr) {
//     if (typeof i === "string") {
//         console.log(i);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr =[];
// arr[0]=undefined;
// arr[1]=123;
// arr[2]=true;
// arr[3]='fsds';
// arr[4]=false;
// arr[5]='123';
// arr[6]=404104.3;
// arr[7]=null;
// arr[8]=0;
// arr[9]='123';

// for (const i of arr) {
//     console.log(i);

// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i); 
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);   
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);    
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i%2===0) {
//         console.log(i);
//         document.write(i);    
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i%2===1) {
//         console.log(i);
//         document.write(i);    
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

// for (let min = 0; min < 2; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//         document.write(`${min}:${sec}<br>`)
//     }

// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hour = 0; hour < 3; hour++) {
//     if (hour<2) {
//         for (let min = 0; min < 60; min++) {
//             for (let sec = 0; sec < 60; sec++) {
//                 document.write(`${hour}:${min}:${sec}<br>`)
//             }   
//         }

//     }
//     else {
//         for (let min = 0; min < 20; min++) {
//             for (let sec = 0; sec < 60; sec++) {
//                 document.write(`${hour}:${min}:${sec}<br>`)
//             }   
//         }
//     }

// }

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let word = ''
// let arr = ['a', 'b', 'c']
// for (let i = 0; i < arr.length; i++) {
//     word += arr[i];   
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let word = '';
// let i = 0;
// let arr = ['a', 'b', 'c']
// while (i < arr.length) {
//     word += arr[i];
//     i++
// }
// console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let word = ''
// for (const i of ['a', 'b', 'c']) {
//     word += i
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let word = '';
// let i = 0;
// let arr = ['a', 'b', 'c']
// for (const i in arr) {
//     word+=arr[i]; 
//     }
// console.log(word);

// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let arr=['a', 'b', 'c'];
// for (let i = 1; i < 4; i++) {
//     arr.push(i);  
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

// let arr=[1, 2, 3];
// let arr2=[];
// for (const i of arr) {
//     arr2.unshift(i);
// }
// console.log(arr2);

// let arr=[1, 2, 3];
// let arr2=[];
// for (let i = arr.length-1; i >= 0; i--) {
//     arr2.push(arr[i]);  
// }
// console.log(arr2);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let arr=[1, 2, 3]
// arr.push(4);
// arr.push(5);
// arr.push(6);
// console.log(arr);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arr=[1, 2, 3]
// arr.unshift(4);
// arr.unshift(5);
// arr.unshift(6);
// console.log(arr);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arr =['js', 'css', 'jq'];
// document.write(elem=arr.shift());


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arr =['js', 'css', 'jq'];
// document.write(elem=arr.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let arr=[1, 2, 3, 4, 5];
// console.log(arr.slice(3));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let arr=[1, 2, 3, 4, 5];
// console.log(arr.slice(0,2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let arr=[1, 2, 3, 4, 5];
// let removed=arr.splice(1, 2)
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5];
// let removed = arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr=[1, 2, 3, 4, 5];
// let removed=arr.splice(1,0, 'a', 'b');
// removed=arr.splice(6,0,'c');
// removed=arr.splice(8,0,'e');
// console.log(arr);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const i of arr) {
//     if (i%2===0) {
//         console.log(i);
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let arr = [1, 2, 3, 4, 5, 6, 7, 999, 9, 10];
// let arr2=[];
// for (const i of arr) {
//     arr2.push(i)
// }
// console.log(arr2);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2=[];
// for (const i in arr) {
//         arr2[i]=arr[i]
//     }
// console.log(arr2);

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// 1. перебрати його циклом while

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let i=0;
// while (i<arr.length) {
//     console.log(arr[i]);
//     i++
// }
// 2. перебрати його циклом for

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (const i of arr) {
//     console.log(i);

// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let i=1
// while (i<arr.length) {
//     console.log(arr[i]);
//     i+=2
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (let i = 1; i < arr.length; i+=2) {
//     console.log(arr[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// let i=0
// while (i<arr.length) {
//     if (arr[i]%2===0) {
//         console.log(arr[i]);    
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (const i of arr) {
//     if (i%2==0) {
//         console.log(i);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]
// for (const i in arr) {
//     if (arr[i]%3==0) {
//         arr[i]='okten';
//     }
// }
// console.log(arr);


// 8. вивести масив в зворотньому порядку.

// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// for (let i = 9; i >= 0; i--) {
//     console.log(arr[i]);
// }

// let i=arr.length-1
// while (i>=0) {
//     console.log(arr[i]);
//     i--
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10. створити пустий масив та :
// let arr = [];
// 1. заповнити його 50 парними числами за допомоги циклу.

// let arr = [];
// let i=0;
// let j=0;
// while (arr.length<50) {
//     arr[i]=j;
//     i++
//     j+=2
//     }
// console.log(arr);


// 2. заповнити його 50 непарними числами за допомоги циклу.

// let arr = [];
// let i=0;
// let j=1;
// while (arr.length<50) {
//     arr[i]=j;
//     i++
//     j+=2
//     }
// console.log(arr);


// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let arr = [];
// for (let i = 0; i < 50; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(arr);


// 2. вывести на консоль  каждый третий елемент


// let arr = [];
// for (let i = 0; i < 50; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i+=3) {
//     console.log(arr[i]);

// }

// 3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.

// let arr = [];
// for (let i = 0; i < 50; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i+=3) {
//     if (!(arr[i]%2)) {
//         console.log(arr[i]);

//     };

// }

// 4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и записать их в другой массив.


// let arr = [];
// for (let i = 0; i < 50; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(arr);

// let arr2=[];
// for (let i = 0; i < arr.length; i+=3) {
//     if (!(arr[i]%2)) {
//         console.log(arr[i]);
//         arr2.push(arr[i])
//     };

// }
// console.log(arr2);



// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// let arr = [];
// for (let i = 0; i < 50; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
    //     if (!(arr[i+1]%2)) {
        //         console.log(arr[i]);
        
        //     };
        
        // }
        
        
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// let arr = [100, 250, 50, 168, 120, 345, 188];
// let sum=0
// for (const i of arr) {
    //     sum+=i
    // }
    // console.log(sum/arr.length);
            
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr = [];
// for (let i = 0; i < 50; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
// }
// console.log(arr);


// let arr2=[];
// for (const i of arr) {
//     arr2.push(i*5)
// }
// console.log(arr2);


// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом, додати його в інший масив.
// let arr = [100, 'fhdsfjds', 50, 'dsfds', 120, true, 188, false, NaN];
// let arr2=[];
// for (const i of arr) {
//     if (typeof i=='number') {
//         arr2.push(i)
//     }    
// }
// console.log(arr2);
