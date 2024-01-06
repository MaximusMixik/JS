

// !!!!!!!!!!!!!!! LESSON 7

//! 00: 12: 00 Синтаксис
// function greeting() {
//   let value
//   for (let i = 1; i <= 3; i++) {
//     switch (i) {
//       case 1: value = 'Hello!'
//         break
//       case 2: value = 'Wait!'
//         break
//       case 3: value = 'Bye!'
//         break
//     }
//     console.log(`${value}`)
//   }
// }

// for (let i = 0; i < 3; i++) {
//   greeting()
// }


//! 00: 21: 00 function declaration
// function payForWork(salary, benefits, tax) {
//   return (salary + benefits) * (1 - tax / 100)
// }

// let result = payForWork(15000, 2000, 4)
// alert(result)

//! 00: 35: 00 Задача по темі з поясненнями
//Задача. Визначити середню оцінку з трьох предметів

// function getAverageScore(math, geography, literature) {
//   return (math + geography + literature) / 3
// }

// let resScore = getAverageScore(9, 12, 3)
// alert(resScore)

//! 00: 42: 00 Задача по темі з поясненнями
// function userCommand(userName) {
//   console.log(`Hello ${userName}`);
//   console.log(`Wait ${userName}`);
//   console.log(`Bye ${userName}`);
// }
// userCommand('Nick')


//! 00: 45: 00 Задача по темі з поясненнями	 2 return
// 1.опис функції
// get- зазвичай щось повертай (return)

// function getMax(num1, num2) {
//   if (num1 > num2) return num1
//   else return num2
// }
// alert(getMax(10, 15))

// best variation
// function getMax(num1, num2) {
//   let result
//   if (num1 > num2) result = num1
//   else result = num2
//   return result
// }
// let max = getMax(10, 20)
// alert(max)


//! 00: 58: 00 Задача по темі з поясненнями
// Задача.Вивести привітання декількома мовами(створити функцію: мова задається(ua, en), а виводиться привітання на потрібній мові(‘привіт’, ‘hello’))

// function getlocale(locale) {
//   let result

//   // if (locale === 'ua') result = 'привіт'
//   // else if (locale === 'en') result = 'hello'
//   switch (locale) {
//     case 'ua': result = 'привіт'
//       break;
//     case 'en': result = 'hello'
//       break;
//   }
//   return result
// }

// let greatings = getlocale('en')
// alert(greatings)

//! 01: 21: 00 function expression
// function func1() {
//   alert("111")
// }
// let x2 = function func2() {
//   alert("222")
// }

// let x1 = func1
// x1()
// x2()

//! 01: 39: 00 задача
// Задача.Двоє гравців кидають двічі разів кубик і визначається сумарна кількість балів.Визначити переможця
// //1. Функція для визначення кількості балів в результаті підкидання
// function getDiceScore() {
//   return 1 + Math.floor(Math.random() * 6)
// }

// //2.Функція для визначення кількості балів гравця
// function getPlayerScore() {
//   let score1 = getDiceScore()
//   let score2 = getDiceScore()
//   return score1 + score2
// }

// //3. Використання функцій
// let player1Score = getPlayerScore()
// let player2Score = getPlayerScore()
// if (player1Score > player2Score) alert('Player1 ')
// else if (player1Score < player2Score) alert('Player2 ')
// else alert('Нічия')

//! my version
// function getCubSum() {
//   let sum = 0
//   for (let i = 0; i < 2; i++) {
//     const min = 1,
//       max = 6,
//       random = Math.floor(Math.random() * (max - min + 1) + min)
//     sum += random
//   }
//   return sum
// }




// function whoWin(player1, player2) {
//   let player1Score = getCubSum(),
//     player2Score = getCubSum()
//   let result
//   if (player1Score > player2Score) result = `${player1} Winner!!! ${player1Score}`
//   else if (player1Score === player2Score) result = 'draw'
//   else result = `${player2} Winner!!! ${player2Score}`
//   return result
// }


// alert(whoWin('Max', 'Stepan'))


//! 01: 54: 00 перетворення існуючих функцій у функції стрілки
// // //1. Функція для визначення кількості балів в результаті підкидання
// // function getDiceScore() {
// //   return 1 + Math.floor(Math.random() * 6)
// // }

// let getDiceScore = () => 1 + Math.floor(Math.random() * 6)

// // //2.Функція для визначення кількості балів гравця
// // function getPlayerScore() {
// // let score1 = getDiceScore()
// // let score2 = getDiceScore()
// // return score1 + score2
// // }
// let getPlayerScore = () => {
//   let score1 = getDiceScore()
//   let score2 = getDiceScore()
//   return score1 + score2
// }

// // //3. Використання функцій
// // let player1Score = getPlayerScore()
// // let player2Score = getPlayerScore()
// // if (player1Score > player2Score) alert('Player1 ')
// // else if (player1Score < player2Score) alert('Player2 ')
// // else alert('Нічия')



//! 02: 10: 00  Задача по темі з поясненнями
// Обчислити.    S = Max(a, b) + Min(c, d) +Max(a, c)
//               S =   m1      +    m2     +  m3

// function getMax(num1, num2) {
//   return num1 > num2 ? num1 : num2
// }

// function getMin(num1, num2) {
//   return num1 < num2 ? num1 : num2
// }

// let a = 3, b = 5, c = 8, d = 10,
//   s = getMax(a, b) + getMin(c, d) + getMax(a, c)

// alert(s)


//! 02: 23: 00 Задача по темі з поясненнями
//  Дано 4 числа.Знайти суму та добуток як результат однієї функції.

// function getSumProd(num1, num2) {
//   let sum = num1 + num2
//   let prod = num1 * num2
//   return [sum, prod]
// }

// let result = getSumProd(12, 4)

// alert(`sum = ${result[0]}, prod = ${result[1]}`)

//! Дано 4 числа. Знайти максимальне і мінімальне значення як результат однієї функції.
// function getMinMax(num1, num2) {
//   let min = max = 0
//   if (num1 > num2) {
//     max = num1
//     min = num2
//   }
//   else {
//     min = num1
//     max = num2
//   }
//   return [min, max]
// }

// let result = getMinMax(12, 4)
// alert(`min = ${result[0]}, max = ${result[1]}`)