// 2. Написать скрипт, который выведет  5 строк в консоль таким образом, 
// чтобы в первой строчке выводилось :), во второй :):) и так далее

// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let result = ''
let smile = ';)'

// for(let a = 1; a <6; a++) {
//     console.log(result += smile)
// }


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
//     которая и будет выводиться в консоль (как в условии смайлик), 
//     а также количество строк для вывода 

// e.g. function printSmile(stroka, numberOfRows)


function printSmile(stroka, numberOfRows) {
    for(let a = 1; a <= numberOfRows; a++) {
        console.log(result += stroka)
    }
}
printSmile(';(', 8)