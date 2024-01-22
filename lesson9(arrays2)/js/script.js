// !!!!!!!!!!!!!!! LESSON 9
//! 01: 10: 00 приклад
//Приклад. Описати порожній масив products
// const products = []
//Приклад. Описати масив з 7 порожніх елементів
// const products = new Array(7)
// Приклад. Описати масив з 7 елементів зі значенням 22
// const products = new Array(7).fill(22)

// let products = new Array(10).fill(3, 0, 5) //заповнення на половину 3
// products.fill(7, 5) //заповнення на половину 7

// let products = new Array(9).fill(1, 0, 3).fill(5, 3)
// console.log(products);

//!01:27:00   цикл - for of - тільки перегляд, без змін!
//Приклад. Дано масив показників температур. Вивести на екран додатні значення показників
// const temperatureList = [-22, 18, 16, 12, -12]
// for (let temp of temperatureList) {
//   if (temp > 0) console.log(temp)
// }

//!	01:32:00 Приклад. Масив цін товарів. Знайти суму цін, які більші за 100.
// const price = [300, 200, 100, 1, 12]
// let sum = 0

// for (const item of price) {
//   if (item > 100) sum += item
// }
// console.log(sum);

//! 01: 35: 00 Приклад.Дано масив показників температур.Від’ємні замінити на 0
// const temperatureList = [-22, 18, 16, 12, -12]

// for (let i = 0; i < temperatureList.length; i++) {
//   if (temperatureList[i] < 0) temperatureList[i] = 0
// }
// console.log(temperatureList);

//! 01: 38: 00  Задача.Кожне парне число збільшити на 5.
// const list = [2, 18, 16, 12, 15]

// for (let i = 0; i < list.length; i++) {
//   if (list[i] % 2 === 0) list[i] += 5
// }
// console.log(list);

// for (let index = 0; index < array.length; index++) {
//   const element = array[index]
// }


// ! 01:40:00 Задача
// Задача.Дано масив оцінок учнів у 12 бальній шкалі.Користувач задає шкалу, у якій він хоче отримат результати
// учнів :
// «високий(>=7)»/«нижче середнього(<7)»
// «переводиться у наступний клас (>=5)» / «залишається, не вистає ${5-бал} якщо (<5)»
// Вивести на екран маркований список з переведеними у дану шкалу оцінками.
// const scores = [3, 9, 2, 10, 8]

// function userRate1(score) {
//   return score >= 7
//     ? 'Високий'
//     : 'нижче середнього'
// }

// function userRate2(score) {
//   return score >= 5
//     ? 'переводиться у наступний клас'
//     : `залишається, не вистачає ${5 - score} - балів`
// }


// function print(scores, userScales) {
//   document.write('<ul>')
//   for (const score of scores) {
//     document.write(`<li>
//    ${userScales(score)}
// </li>`)
//   }
//   document.write('</ul> <br>')
// }


// let userAnswer = parseInt(prompt('1 - рівень \n 2 - перехід  '))
// let userScales = userAnswer === 2 ? userScales = userRate1 : userScales = userRate2
// !arrow func
// let userScales = 0
// userAnswer === 2 ? userScales = (score) => score >= 7 ? 'Високий' : 'нижче середнього' : userScales = (score) => score >= 5 ? 'переводиться у наступний клас' : `залишається, не вистачає ${5 - score} - балів`


// print(scores, userScales)


// ! 01: 50: 00 функція Callback
// function f1() {
//   console.log('1111111')
// }
// function f2() {
//   console.log('222222')
// }

// function main(value, func1, func2) {
//   if (value >= 1) func1()
//   else func2()
// }

// main(0, f1, f2)



// ! 02:13:00 foreach

// const scores = [3, 9, 2, 10, 8]
// scores.forEach(element => {
//   if (element > 7) console.log(element)
// });

//! 	02:20:00 Дано масив. Для кожного елемента вивести квадрат цього числа
// const scores = [3, 9, 2, 10, 8]

// let print = (item) => console.log(item * item);

// через функцію + перебор форОф
// for (const item of scores) {
//   print(item)
// }

// скорочений запис
// scores.forEach(print)

// Ще більш короткий запис.
// Для кожного елемента масиву викликати цю функцію
// scores.forEach(el => console.log(el * el))

//! 02: 34: 00 Приклад Параметри foreach
// const arr = [2, 3, 9, 8, 1, 51]
// arr.forEach((element, index, baseArray) => { if (element > 7) baseArray[index] = 0 });
// console.log(arr);

//! 02: 39: 00 Приклад Параметри foreach
//! 1
// const temps = [2, -3, 9, 8, 1, -10, -3, 12, 6]
// temps.forEach(el => { if (el > 0) console.log(el) })
// !1.1 indexes
// temps.forEach((element, index) => { if (element > 0) console.log(index) })


//! 2
// const productPrice = [299, 100, 140, 30, 25, 123]
// let sum = 0
// productPrice.forEach(el => { if (el > 100) sum += el })
// console.log(sum);

//! 02:47:00  3
// const temps = [2, -3, 9, 8, 1, -10, -3, 12, 6]
// temps.forEach((element, index, arrTemp) => { if (element < 0) arrTemp[index] = 0 })
// console.log(temps);


//! 02: 54: 00 копіювання масиву без змін
// let temps = [2, -3, 9, 8, 1, -10, -3, 12, 6]
//! варіант №1
// let newArray = Array.from(temps)
//! варіант №2 Деструктирізація
// let newArray = [...temps]

// перевірка
// newArray.forEach((el, ind, arr) => { if (el > 0) arr[ind] = 0 })

// console.log(temps);
// console.log(newArray);

