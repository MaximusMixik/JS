

// !!!!!!!!!!!!!!! LESSON

// довжина масиву

// const myArray = [3, 2, 1, 0, [3, 2, 1]] //масив
// console.log(typeof myArray); //тип об'єкт
// console.log(myArray.length); //довжина
// console.log(myArray); // вміст

// console.log(myArray[2]); // звернення
// console.log(myArray[4][0]); // звернення до підмасиву

// let x = myArray[2] // привласнення значення з масиву
// console.log(x);

// console.log(myArray[2]); // зміна значення
// myArray[2] = 33
// console.log(myArray[2]);


// // Змінна в масиві
// let b = 25
// const arrayB = [1, 2, 3, b]
// console.log(arrayB[3]);


//! 00:39:00 Приклад (Цикл + масив)
// let age = [], maxAge = 0
// for (let i = 1; i < 7; i++) {
//   age[i] = parseInt(prompt(`вік ${i} учня `))
//   if (age[i] > maxAge) maxAge = age[i]
// }

// console.log(age);
// console.log(maxAge);

//! 00: 46: 00 Приклад 2(Цикл + масив)

// let array = [12, 22, 43, 12, 22, 23],
//   sum = array[0]

// for (let i = 1; i < array.length; i++) {
//   sum += array[i]
// }
// console.log(array);
// console.log(sum);


//! моя версія
// let array = [],
//   userProdctsNumber = parseInt(prompt('Загальна кількість товарів')),
//   sum = 0

// for (let i = 1; i <= userProdctsNumber; i++) {
//   array[i] = parseFloat(prompt(`ціна за ${i} товар`))
//   sum += array[i]
// }

// console.log(array);
// console.log(sum);

//! 00: 58: 00 Правильний підхід побудови масивів(резервування простору у масиві)

// let areaNumbers = parseInt(prompt('area item numbers')),
//   newArray = new Array(areaNumbers)

// for (let i = 0; i < newArray.length; i++) {
//   newArray[i] = parseInt(prompt(`${i} - Array claster `))
// }
// console.log(newArray);


//! 01: 02: 00   push - додати елемент в кінець масиву
// let arr = new Array(4)
// arr.push(24)
// console.log(arr);


//! 01: 08: 30 Практика з масивами
// Задача. Дано розміри доходу магазину за кожен місяць протягом року. Знайти:

// let income = [],
//   sum = 0

// for (let i = 0; i < 12; i++) {
//   let monthMoney = parseFloat(prompt(`дохід магазину за ${i}-місяь`))
//   income.push(monthMoney)
//   sum += income[i]
// }
// console.log(income);
// console.table(income)
// document.write(`Загальний прибуток ${sum}грн`);

// !func version
// function getArray(arrayLength, textDescription) {
//   const myArray = []
//   for (let i = 0; i < arrayLength; i++) {
//     userValue = parseInt(prompt(`${textDescription} ${i + 1}`))
//     myArray.push(userValue)
//   }
//   return myArray
// }

// let totalMoney = getArray(12, 'дохід магазину за місяць ')

// function totalSum(array, start, end) {
//   let sum = 0
//   for (let i = start; i < end; i++) {
//     sum += array[i]
//   }
//   return sum
// }
// // 1) загальний дохід за рік (1-12)

// let totalPerYear = totalSum(totalMoney, 0, totalMoney.length)
// alert(`загальний дохід ${totalPerYear} загальний дохід за рік (1-12)`)

// // 2) загальний дохід за 1-ше півріччя (1-6)
// let totalPerFirstHalfYear = totalSum(totalMoney, 0, totalMoney.length / 2)
// alert(`загальний дохід ${totalPerFirstHalfYear} за 1-ше півріччя (1-6)`)
// // 3) загальний дохід за 2-ге півріччя (7-12)
// let totalPerSecondHalfYear = totalSum(totalMoney, totalMoney.length / 2, totalMoney.length)
// alert(`загальний дохід ${totalPerSecondHalfYear} за 2-ге півріччя (7-12)`)
// // 4) загальний дохід за 2-гий квартал (4-6)
// let totalPerSecondCvartalfYear = totalSum(totalMoney, 3, 5)
// alert(`загальний дохід ${totalPerSecondCvartalfYear} загальний дохід за 2-гий квартал (4-6)`)
// // 5) загальний дохід за 2-гий і 3-тій квартал (4-9)
// let totalPerSecondThirdCvartalYear = totalSum(totalMoney, 3, 8)
// alert(`загальний дохід ${totalPerSecondThirdCvartalYear} загальний дохід за 2-гий і 3-тій квартал (4-9)`)



//       01:39:00 Задача
// Знайти суму цін товарів, які більші за 100. Кількість та ціни вводяться з клавіатури


// // 1. Отримуємо кількість
// let value = parseInt(prompt('Кількість товарів')),
//   sum = 0,
//   array = []

// // 2. введення елементів до масиву
// for (let i = 0; i < value; i++) {
//   let price = parseFloat(prompt(`ціна товару ${i + 1}  `))
//   array.push(price)
// }
// // 3. розв'язок (перегляд кожного на відповідність умові)
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 100) sum += array[i]
// }
// // 4 Вивід розв'язків
// document.write(`<h1>sum =${sum}</h1>`)

//! 01:47:00  Розв'язок з функціями
// function getArray(arrayLength) {
//   let myArray = []
//   for (let i = 0; i < arrayLength; i++) {
//     let price = parseFloat(prompt(`ціна товару ${i + 1}  `))
//     myArray.push(price)
//   }
//   return myArray
// }
// function getSum(array) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 100) sum += array[i]
//   }
//   return sum
// }

// let itemsNumber = parseInt(prompt('Кількість товарів'))

// // let myArray = getArray(itemsNumber)
// // let result = getSum(myArray)
// // alert(`сума цін товарів, які більші за 100  = ${result}грн`)
// // скорочений виклик
// alert(`${getSum(getArray(itemsNumber))}грн сума цін товарів, які більші за 100  `)



// ! 02: 00: 00 Задача №2 Дано вартості товарів.Для тих, які більші за 1000 від ціни відняти 200.
// function addDiscount(prices) {
//   for (let i = 0; i < prices.length; i++)  if (prices[i] > 1000) prices[i] -= 200
//   return prices
// }
// let pricesArray = [2200, 1200, 800, 500, 1300]
// console.log(addDiscount(pricesArray));

//! 02: 08: 00 приклад використання arguments
// function sum() {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++)  sum += arguments[i]
//   return sum
// }
// console.log(sum(20, 15, 10, 5, 3, 2, 1, 4, 1));

//!02:18:00 приклад з використанням ...arrayName - rest parameter
//       Задача. Створити функцію, яка приймає рік виходу на пенсію, та довільну
// кількість значень років працівників. Визначити кількість пенсіонерів.

//перше значення перейде у змінну age решта у  масив workerAges
// function getPensionerCount(age, ...workerAges) {
//   let count = 0
//   for (let i = 0; i < workerAges.length; i++) if (workerAges[i] > age) count++
//   return count
// }
// const result = getPensionerCount(65, 33, 23, 45, 65, 22, 66, 23, 43, 70, 77)
// console.log(result);


//! 02: 27: 00  приклад #2 Дано покази температур.Підрахувати кількість показників у заданому діапазоні

// function tempCount(minRange, maxRange, ...tempsArray) {
//   let count = 0
//   for (let i = 0; i < tempsArray.length; i++) if (tempsArray[i] > minRange && tempsArray[i] < maxRange) count++
//   return count
// }
// //10 - minRange / 15 - maxRange / решта у масив tempsArray
// console.log(tempCount(10, 15, 10, 20, 14, 12, 11, 23));

//! Варіант з передачею масиву
// function tempCount(minRange, maxRange, tempsArray) {
//   let count = 0
//   for (let i = 0; i < tempsArray.length; i++) if (tempsArray[i] > minRange && tempsArray[i] < maxRange) count++
//   return count
// }
// const tempsArray = [10, 20, 14, 12, 11, 23]
// //10 - minRange / 15 - maxRange / решта у масив tempsArray
// console.log(tempCount(10, 15, tempsArray));




//! 02: 33: 00  приклад #3
//  Дано покази температур(довільна кількість).Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.

// ! Більш пріорітетний підхід
// function positiveTemp(...tempsList) {
//   let count = sum = 0
//   for (let i = 0; i < tempsList.length; i++) {
//     if (tempsList[i] > 0) {
//       count++
//       sum += tempsList[i]
//     }
//   }
//   return sum / count
// }

// const tempsArray = positiveTemp(10, 12, -8, 10, 3, 5, -2, -3, -12, 10)
// console.log(`середнє значення для додатних показів температури. ${tempsArray.toFixed(1)}`);

//! підхід з arguments
// function positiveTemp() {
//   let count = sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > 0) {
//       count++
//       sum += arguments[i]
//     }
//   }
//   return sum / count
// }
// let result = positiveTemp(10, 12, -8, 10, 3, 5, -2, -3, -12, 10, 20, 23)
// console.log(`середнє значення для додатних показів температури. ${(result).toFixed(1)}`);

//! 02: 46: 00 Задача.Створити функцію, яка виводить на екран можливі значення секунд на годиннику
// function printSeconds() {
//   for (let sec = 1; sec <= 59; sec++) {
//     let prefix = sec <= 9 ? '0' : ''
//     console.log(`${prefix}${sec}`)
//   }
// }
// printSeconds()

//! 02: 50: 00 З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною.
// let num1 = parseInt(prompt('Перше число = ')),
//   num2 = parseInt(prompt('Друге число = ')),
//   difference = num2 - num1 // difference>0 - зростаюча difference<0 спадаюча

// do {
//   num1 = num2
//   num2 = parseInt(prompt('Наступне число = '))
// } while ((num2 - num1) * difference > 0)

//! 03: 01: 00 Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7(у числі є всього дві цифри 7, наприклад: 2679328712)
//остання цифра числа num=327      num%10  =7
//позбутися останньої цифри - націло поділити на 10 - num = Math.floor(num/10)
//1)Знаходимо першу 7
// let num = 2679328712,
//   c

// do {
//   c = num % 10
//   num = Math.floor(num / 10)
// } while (c != 7)

// let s = 0
// c = 0
// while (c !== 7) {
//   s += c
//   c = num % 10
//   num = Math.floor(num / 10)
// }
// console.log(s)

//! 03:13: 00 Задача. Поступово генеруються R випадкових чисел у вказаному діапазоні. Знайти суму тільки парних.
// function getSumRandEvenNumbers(min, max, counter) {
//   let sum = 0
//   for (let i = 0; i < counter; i++) {
//     const randomNumber = min + Math.floor(Math.random() * (max - min + 1))
//     if (randomNumber % 2 === 0) sum += randomNumber
//   }
//   return sum
// }
// let result = getSumRandEvenNumbers(1, 100, 10)
// console.log(result);
