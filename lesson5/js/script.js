

// !!!!!!!!!!!!!!! LESSON  №5


// let my = "HEllo!!!",
//   i = 1
// for (i; i < 3; i++) {
//   alert(`${my} ${i}`)
// }
// alert(i)


//! різниця з областю видимості
// for (let i = 1; i <= 5; i++) {
//   let my = "HEllo!!!"
//   alert(`${my} ${i}`)
// }


//! 00:35:30 Задача 1
// З клавіатури вводиться 5 пар цілих чисел.Якщо числа рівні, то вивести їх суму, інакше добуток.

// for (let i = 0; i < 5; i++) {
//   let firstNumber = parseInt(prompt(`Number 1 in ${i} pair `)),
//     secondNumber = parseInt(prompt(`Number 2 in ${i} pair `)),
//     result

//   if (firstNumber === secondNumber)
//     result = firstNumber + secondNumber
//   else
//     result = firstNumber * secondNumber

//   alert(result)
// }

//! 00: 40: 40 Задача №2
// Генерується 6 разів ціле число від 1 до 10 і кожного разу дається можливість користувачу вгадати число
// let winValue = 0

// for (let i = 0; i < 6; i++) {
//   const min = 1,
//     max = 10,
//     value = min + Math.floor(Math.random() * (max - min + 1)),
//     userValue = parseInt(prompt("Вгадай число від 1 до 10"))

//   let result
//   if (userValue === value)
//     result = `Вітаю ви вгадали ${++winValue} раз!!!`
//   else
//     result = `не  вгадали рандомне число ${value}, ваша ставка на ${userValue}, кількість перемог ${winValue}, лишилось ${5 - i} спроб`

//   alert(result)
// }
// alert(winValue)



//!  00: 45: 00 Задача 00:55:00  №3 + Задача №4
// Поступово вводяться вартості 7 товарів.Знайти загальну вартість

// let totalCost = 0

// for (let i = 1; i <= 7; i++) {
//   let itemPrice = parseFloat(prompt(`Введіть ціну товару ${i}`))
//   // або при умові let i = 0; i < 7; i++   для виведення 1 робити i+1
//   totalCost += itemPrice
// }

// alert(totalCost)

//! 01: 02: 00  інші значення у циклі
// Вивести на екран усі числа кратні трбом від 6 до 28
// for (let i = 6; i <= 28; i += 3) {
//   alert(i)
// }


//! 01: 05: 00 приклад
// Вивести номери місяців другого півріччя(6 - 12)

// for (let i = 6; i <= 12; i++) {
//   document.write(" Month " + "  " + i + "  ")
// }

//! 01: 07: 00
// Вивести сумми сплаченого кредитую ПОчатковий внесок 5000грн кінцевий 15000грн, а щомісячний 2000грн

// for (let creditPay = 5000; creditPay <= 15000; creditPay += 2000) {
//   document.write(` ${creditPay}грн `)
// }

//! 01: 10: 00 Тренажер додавання
// for (let numOne = 1; numOne <= 3; numOne++) {
//   for (let numTwo = 1; numTwo <= 3; numTwo++) {
//     let userValue = parseInt(prompt(`${numTwo} + ${numOne} = `))
//     if (userValue === numTwo + numOne)
//       alert("Good!")
//     else
//       alert("Mistakes")
//   }
// }

//! 01: 15: 00 Задача
// Ввожится прибуток магазину за 3 тижні(для кожного тижня вводиться прибуток за робочі дні).Знайти загальну суму

// let totalValue = 0
// for (let numOne = 1; numOne <= 3; numOne++) {
//   for (let numTwo = 1; numTwo <= 5; numTwo++) {
//     let userValue = parseInt(prompt(`Тиждень ${numOne}, День ${numTwo}`));
//     totalValue += userValue
//   }
// }
// alert(totalValue)



//!!!!!!!!!!!!!!!!!!! 01: 21: 00 Тренажер множення
// let userWins = 0
// for (let i = 0; i < 4; i++) {
//   const min = 1,
//     max = 9,
//     firstGeneratingNumber = min + Math.floor(Math.random() * (max - min + 1)),
//     secondGeneratingNumber = min + Math.floor(Math.random() * (max - min + 1)),
//     corerectValue = firstGeneratingNumber * secondGeneratingNumber,
//     userValue = parseInt(prompt(`Який результат множення двох чисел? ${secondGeneratingNumber} * ${firstGeneratingNumber}, лишилось спроб ${4 - i}  `))
//   if (userValue === corerectValue) {
//     userWins++
//     alert(`Правильниа відповідь ${corerectValue} Всього правильних відповідей ${userWins} `)
//   }
// }


//!!!!!!!!!!!!!!!!!!!  01: 30: 00 while

// let num = parseInt(prompt("Кількість булочок завезли"))

// while (num > 0) {
//   const countOnSale = parseInt(prompt("Скільки булочок ви бажаєте купити?"))
//   if (countOnSale < num) {
//     num -= countOnSale
//     alert(`Залишилось у наявності ${num}`)
//   }
//   else if (countOnSale === num) {
//     alert(`Ви щасливчик, забираєте останні ${num} булочки`)
//     num -= countOnSale
//   }
//   else
//     alert(`Стільки нема  у наявності, лишилось  ${num} булочок`)
// }

// alert("Весь товар продано!")


//! 01: 45: 00 приклад з числами
// let n = parseInt(prompt("Введіть перше число")),
//   m = parseInt(prompt("Введіть друге число"))

// while (n < m) {
//   document.write(`${n++} - ${m--} <br>`)
// }


//! 02: 03: 00 Задача
// З клавіатури вводяться поступово двоцифрові числа.Знаходимо їх добуток поки не буде введено 0
// let product = 1,
//   number = 1
// do {
//   product *= number
//   number = parseInt(prompt("add first number"))
//   alert(product)

// }
// while (number !== 0)

// document.write(product)




//! 02: 11: 00 break
// Приклади *. 3 рази дати можливість ввести пароль(правильний пароль «123»)
// let isLogginedIn = false
// for (let i = 0; i < 3; i++) {
//   const userPassword = parseInt(prompt('User Password')),
//     password = 123
//   if (userPassword === password) {
//     isLogginedIn = true
//     break
//   }
//   else
//   alert(`number of attempts ${2 - i}`)

// }


// if (isLogginedIn === true)
//   alert("Welcome!")
// else
//   alert("fail")

// ! 02: 22: 00 Задача
// Дано 3 сайти на яких користувач хочекупити по 2 товари
// Коли гроші закінчуються покупка припиняється
// let userMoney = parseFloat(prompt('user money')),
//   totalPrice = 0

// exit: for (let sitesNum = 1; sitesNum <= 3; sitesNum++) {
//   for (let productNum = 1; productNum <= 2; productNum++) {
//     const productPrice = parseFloat(prompt(`сайт ${sitesNum} , ціна товару ${productNum}`))
//     if (productPrice <= userMoney) {
//       userMoney -= productPrice
//       totalPrice += productPrice
//       alert(`вітаємо з покупкою! Витрачено ${productPrice}грн на цей товар, витрачено загалом ${totalPrice}грн, Залишок ${userMoney}грн`)

//     }
//     else {
//       alert("недостатньо коштів")
//       break exit
//     }
//   }
// }

// alert(`вітаємо з покупкою! Витрачено ${productPrice}грн на цей товар, витрачено загалом ${totalPrice}, Залишок${userMoney}`)



// ! 02: 40: 00 знайти 2 найбільших числа з 4 цілих чисел
// const num1 = parseFloat(prompt("Number 1")),
//   num2 = parseFloat(prompt("Number 2")),
//   num3 = parseFloat(prompt("Number 3")),
//   num4 = parseFloat(prompt("Number 4"))
// let max1, max2

// if (num1 > num2) {
//   max1 = num1
//   max2 = num2
// }
// else {і
//   max1 = num2
//   max2 = num1
// }

// if (num3 > max1) {
//   max2 = max1
//   max1 = num3

// }
// else if (num3 > max2) {
//   max2 = num3
// }

// if (num4 > max1) {
//   max2 = max1
//   max1 = num4
// }
// else if (num4 > max2)
//   max2 = num4

// alert(` найбільші числа ${max1} та  ${max2}`)


// З клавіатури вводяться числа до тих пір, поки не буде введено 3 парних


// Приклад *.Оленка має 0 грн.і хоче назбирати на телефон(10000 грн.).Для цього кожного разу допомагає мамі і отримує
// гонорар - випадкова величина від 1 до 200 грн.Підрахувати скільки разів треба допомагати Оленці поки не назбирає
// на телефон.

// Приклад *.Оленка має М грн. (вводиться з клавіатури) і хоче назбирати на телефон(10000 грн.).Для цього кожного разу
// допомагає мамі і отримує гонорар - випадкова величина від 1 до 200 грн.Підрахувати скільки разів треба допомагати
// Оленці поки не назбирає на телефон.