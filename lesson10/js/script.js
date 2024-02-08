

// !!!!!!!!!!!!!!! LESSON 10

// ! 00: 01: 00 Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

// let array = [122, 3421, 23, 45, 23, 45, 122, 3421, 23, 45, 23, 45]

//! 00: 22: 00 Array.from(array) або[...array]- копіювання масива

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newArr = Array.from(array)
// let newArr = [...array]
// console.log(newArr)


//! 00: 26: 00 масиви на основі інших + модифікація
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newArr = Array.from(array, (el, ind, arr) => el * 2)
// console.log(newArr)

//! 00: 29: 00 map
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newArr = array.map((el, ind, arr) => el * 2)
// console.log(newArr)

//! 00: 36: 00 ЗАдача  Дано масив цін.Створити новий масив додавши 20 % ( * 1.2)
// const price = [1200, 2300, 1010, 3000, 450],
//   newPrice = price.map((el) => el *= 1.2)
// console.log(newPrice)




//! 00: 41: 00 ЗАдача  Дано масив років народження працівників(усі народились 1 січня).Створити масив з кількістю років(2023 - year)
// const birthYearsList = [1998, 1967, 1921, 1976, 2003],
//   currentYear = 2023,
//   currentAge = birthYearsList.map((el) => currentYear - el)

// console.log(currentAge)


//! 00: 45: 00  Дано масив вартості товару у доларах.Створити масив цін у гривнях(* currentCourse)
// const pricesDollar = [222, 123, 23, 23, 2000],
//   currentCourse = 37,
//   uanArray = pricesDollar.map((el) => el * currentCourse)
// console.log(uanArray)


//! 00: 47: 00 Задача.Дано масив імен працівників.Сформувати новий масив, який складається з перших літер імен.

// const names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko'],
//   firstLetters = names.map((name) => name[0])
// console.log(firstLetters)


//! 00: 50: 00 ЗАдача Дано масив вартості товару.Створити масив цін, де до цін > 100 додано 50
// const prices = [222, 123, 23, 23, 2000],
//   newPrice = prices.map((price) => price > 100 ? price + 50 : price)
// console.log(newPrice)

//! V2
// const newPrice = prices.map((el) => {
//   if (el > 100) el += 50
//   return el
// })

// console.log(newPrice)


// arr.length-1

//! 01: 06: 00 приклади
// const userNumber = parseInt(prompt('кількість користувачів')),
//   users = []

// for (let i = 1; i <= userNumber; i++) {
//   const userName = prompt("Ім'я користувача")
//   users.push(userName)
// }

// 1) Реєструвати імена працівників (вводити і зберігати у масиві). Виводити та видаляти їх у порядку надходження.
// while (users.length > 0) {
//   const removeUsers = users.shift()
//   document.write(`${removeUsers}<br>`)
// }

// 2) Реєструвати імена працівників (вводити і зберігати у масиві). Виводити та видаляти їх у порядку зворотному до порядку надходження.

// while (users.length > 0) {
//   const removeUsers = users.pop()
//   document.write(`${removeUsers}<br>`)
// }

// ! 01: 18: 00 arr.splice(початкова позиція,  кількість елементів для видалення, нове значення)

// const numArray = [2010, 2020, 2007, 2008, 2010, 2008]
// for (let i = 0; i < numArray.length; i++) {
//   if (numArray[i] === 2010) {
//     numArray.splice(i + 1, 0, 2015)
//     i++
//   }
// }
// console.log(numArray)


// const numArray = [2010, 2020, 2007, 2008, 2010, 2008]
// numArray.forEach((year, ind, arr) => year === 2010 ? arr.splice(ind + 1, 0, 2015) : null);
// console.log(numArray)

//! 	01:21:00 Задача 2. Дано масив показів темератур за рік (12 місяців). Видалити значення, що відповідають літнім місяцям.
//                    0   1  2   3   4   5   6   7   8   9  10  11
// let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
// let summerTemp = temperatures.splice(5, 3)
// console.log(temperatures)
// console.log(summerTemp)

//! 	01:24:00  Задача 1. Дано масив показів темератур за рік (12 місяців). Замінити значення літніх місяців нулями.
//                     0   1  2   3   4   5   6   7   8   9  10  11
// let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
// let summerTemp = temperatures.splice(5, 3, 0, 0, 0)
// console.log(temperatures)


//!	01:33:00 приклад (копіювання) Дано масив  показів темератур за рік (12 місяців).
// Створити окремі масиви, що скдаюаться зі з начень, які відповідають елементам першого і другого півріччя

//                     0   1  2   3   4   5   6   7   8   9  10  11
// let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]

// let firstPartOfYear = temperatures.slice(0, 6)
// console.log(firstPartOfYear)

// let secondPartOfYear = temperatures.slice(6)
// console.log(secondPartOfYear)

//! V2
// const firstHalfOfYear = temperatures.slice(0, temperatures.length / 2),
// secondHalfOfYear = temperatures.slice(temperatures.length / 2)
//
// console.log(firstHalfOfYear)
// console.log(secondHalfOfYear)
//! 01: 36: 00 пошук елементів у масиві
// (функція indexOf)

// let numArray = [23, 1, 4, 0, 4, 6, 9, 0, 2, 12, 75]

// function searchElementIndex(arr, searchElement) {
//   let searchIndex = -1
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === searchElement) {
//       searchIndex = i
//       break
//     }
//   }
//   return searchIndex
// }

// console.log(searchElementIndex(numArray, 12))

// !!! скорочення)
// let numArray = [23, 1, 4, 0, 4, 6, 9, 0, 2, 12, 75]
// let index = numArray.indexOf(75)
// console.log(index)


//!	01:44:00 Задача Дано масив чисел, що містить два нулі. Створити масив, що складається з елементів між цими нулями
//        0    1  2  3  4  5  6  7  8
// let arr = [23, 1, 4, 0, 4, 6, 9, 0, 2, 12, 75]

// let start = arr.indexOf(0) + 1,
//   // end = arr.lastIndexOf(0),
//   end = arr.indexOf(0, start + 1),
//   newArray = arr.slice(start, end)
// console.log(newArray)



//! 01:50:00 Задача  (пошук, копіювання) Дано масив чисел, що містить нулі. Створити масив, що складається з елементів між першим і другим нулем
// let arr = [23, 1, 4, 0, 4, 6, 9, 0, 2, 12, 0, 2, 11, 8, 4, 53],
//   start = arr.indexOf(0) + 1,
//   end = arr.indexOf(0, start),
//   newArr = arr.slice(start, end)

// console.log(newArr)


//! 01: 51: 00 Задача(пошук, копіювання) Дано масив чисел, що містить нулі.Створити масив, що складається з елементів між першим і останнім нулем
// let arr = [23, 1, 4, 0, 4, 6, 9, 0, 2, 12, 0, 2, 11, 8, 4, 53]
// let start = arr.indexOf(0) + 1,
//   end = arr.lastIndexOf(0),
//   newArray = arr.slice(start, end)

// console.log(newArray)


//! 01:54:00 Задача  (пошук, умова)
//  Дано масив з віком відвідувачів.Визначити індекс першого пенсіонера(>= 65)
// let ages = [21, 13, 45, 68, 23, 74, 66, 9, 25, 56, 69]
// let first = ages.findIndex((age) => age >= 65)
// console.log(first)

// ! 	01:58:00  Задача  (пошук, умова) Дано масив з віком відвідувачів.Визначити індекс останнього пенсіонера
// let ages = [21, 13, 45, 68, 23, 74, 66, 9, 25, 56, 69]
// let last = ages.findLastIndex((el) => el >= 65)
// console.log(last)

// !02:02:00 Задача  (пошук) Дано масив оцінок двійочника.Визначити першу погану оцінку(< 4).
// let scores = [8, 9, 12, 4, 7, 1, 10, 8, 9, 2]
// let firstBad = scores.find((el) => el < 4)
// console.log(firstBad)

// !	02:04:00 Задача (пошук останнього елемента з умовою) Дано масив років відвідувачів басейну. Визначити вік останнього пенсіонера (вік більше або рівне за 65)
// let ages = [21, 13, 45, 68, 23, 74, 66, 9, 25, 56, 69]
// let lastPensionerAge = ages.findLast((el) => el > 65)
// console.log(lastPensionerAge)

//! 02:05:30 Задача (пошук останнього елемента з умовою) Дано масив з номерами кімнат, які звернулись на рецепцію.Визначити, чи зверталися з кімнати номер 5.
// let rooms = [12, 15, 7, 23, 45, 21, 35, 8, 19]
// console.log(rooms.includes(5) ? 'yes' : 'No!')
//! V2
// let value = rooms.indexOf(5)
// console.log(value > -1 ? "Yes!" : "No!")


//! 02:14:00 Задача (сума) Знайти суму елементів масиву
// let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]

// let sum = arr.reduce(
//   (prevSum, //попередня сумма
//     el, //значення
//   ) => prevSum + el)
// console.log(sum)

// //! 02:18:00 Задача (добуток) Знайти добуток елементів масиву
// let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]

// let prod = arr.reduce(
//   (prevValue, //попередня сумма
//     el, //значення
//   ) => prevValue * el)
// console.log(prod)

//! 02:18:00 Задача (добуток відємних) Знайти добуток від’ємних елементів масиву.
// let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
// let prod = arr.reduce((prevValue, el) => prevValue < 0 ? prevValue * el : prevValue)
// console.log(prod)

//! V2 якщо перштий елемент нам не підходить
// let arr = [10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
// let prod = arr.reduce(
//   (prevProd, el) => (el < 0 ? prevProd * el : prevProd),
//   1
// )
// console.log(prod)

//! 	02:22:00  Задача (суму парних елементів)  Знайти суму парних елементів
// let arr = [13, 9, 5, 13, 17, 16, 18, 19, 21, 11, 7, 4]
// let sumEven = arr.reduce((sum, el) => (el % 2 === 0 ? sum + el : sum), 0)
// console.log(sumEven)



//! 	02:24:00  Задача (суму 7) Дано масив.Підрахувати кількість 7
// let arr = [10, 9, 5, 13, 7, 16, 18, 19, 21, 11, 7, 4]

// let count7 = arr.reduce((prevCount7, el) => (el === 7 ? prevCount7 + 1 : prevCount7), 0)
// console.log(count7)

//! 	02:27:00  Задача (максимальний) Знайти максимальний елемент
// let arr = [10, 9, 5, 13, 7, 16, 18, 19, 21, 11, 7, 4]
// let max = arr.reduce((prevMax, el) => (el > prevMax ? el : prevMax)) // let max = Math.max(...arr)
// console.log(max)


// !  02:29:00 Задача (максимальний серед  відємних ) Знайти максимальний серед від"ємних елемент
// let arr = [-10, -9, 5, 13, 17, 16, -18, 19, 21, 11, 7, -4]
// let maxMin = arr.reduce((prevMin, el) => prevMin > el ? el : prevMin) //let maxMin = Math.min(...arr)
// console.log(maxMin)


//! 02:31:00 Задача (кількість додатніх). Дано масив  показів темератур за рік (12 місяців). Підрахувати кількість додатних значень.
// let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
// let positiveCount = temperatures.reduce((prevCount, el) => (el > 0 ? prevCount + 1 : prevCount), 0)
// console.log(positiveCount)



//!02:35:00 Задача filter  Дано покази термометра за місяць. Сформувати покази тільки доданих значень(>0)
// let temperaturesList = [-10, 3, -21, 20, 18]
// let moreZero = temperaturesList.filter((el) => el > 0)
// console.log(moreZero)

//!02:37:00 Задача filter Дано покази термометра за місяць. Сформувати покази тільки значень, які знаходяться між 10 і 15 градусами цельсія
// let temperaturesList = [-10, 3, -21, 10, 18, 12]
// let rate = temperaturesList.filter((el) => el >= 10 && el <= 15)
// console.log(rate)

//!02:38:00 Задача (filter)  Дано масив цін. Сформувати новий масив, який складається з цін більших за 1000 грн.
// let prices = [124, 6700, 2345, 322, 99, 324, 9000]
// let newPrices = prices.filter((price) => price > 1000)
// console.log(newPrices)

//!02:38:00 Задача (filter) Дано масив імен учнів. Сформувати масив, які починаються на букви : 'A', 'B', 'J', 'S'

// let names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko']

// let letterArray = ['A', 'B', 'J', 'S']
// let newNamesArray = names.filter((name) => letterArray.includes(name[0]))

// // let newNamesArray = names.filter(el => {
// //   switch (el[0]) {
// //     case "A": return el[0]
// //     case 'B': return el[0]
// //     case 'J': return el[0]
// //     case 'S': return el[0]
// //   }
// // })
// console.log(newNamesArray)



//! 02:45:00 Задача(some) Дано масив показників термометра протягом місяця. З’ясувати, чи є серед них дні, коли температура була меншою за 5 градусів.
// let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
// console.log(temperatures.some(el => el > 5) ? 'Yes' : 'No!')

//! 	02:46:00 Задача(some, every)  Дано масив оцінок
// let scores = [8, 9, 12, 4, 7, 1, 10, 8, 9, 2]
// // 1)Визначити чи є він хорошистом(усі оцінки більші або рівні 7)
// console.log(scores.every(el => el <= 7) ? 'хорошистом' : 'No!')
// //   2)Визначити чи є він двійочником ( є хоча б одна погана оцінка)
// console.log(scores.some((el) => el < 4) ? 'двійочником' : 'No!')


//! 02:56:00 приклад Упорядквати масив чисел за зростанням
// let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
// // -- варінат 1
// arr.sort((a, b) => a - b)
// // --- варіант 2
// arr.sort((el1, el2) => (el1 > el2 ? 1 : el1 < el2 ? -1 : 0))
// // --- варіант 3
//  arr.sort((el1, el2) => {
//   if(el1 > el2)
//     return 1
//   else if(el1 < el2)
//      return -1
//   else return 0
// })
// console.log(arr)

//! 03: 01: 00 приклад(sort - спадання) Упорядквати масив чисел за спаданням
// let arr = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
// arr.sort((a, b) => b - a)
// console.log(arr)

// -- варінат 1
// arr.sort((el1, el2) => {
//   let result
//   if (el1 < el2) result = 1
//   else if (el1 > el2) result = -1
//   else result = 0
//   return result
// })
//--- варіант 2
// arr.sort((el1, el2) => el2 - el1)
// document.write(arr)


//! 03:03:00 приклад (sort слова - зростання)  Упорядкувати масив імен за зростанням
// let names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko']
// names.sort()
// console.log(names)

//! 03:04:00 приклад (sort слова - зростання) Упорядкувати масив імен за зростанням за другою буквою
// let names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko']

// names.sort((name1, name2) => {
//   if (name1[1] > name2[1]) return 1 //пізніше
//   else if (name1[1] < name2[1]) return -1 //раніше
//   else return 0 //однакові
// }
// )
// console.log(names)


//! 03:06:00 приклад (sort слова - зростання)  Упорядувати числа так, щоб спочатку йшли парні, потім непарні.
// let arr = [10, 9, 5, 13, 17, 16, 18, 19, 21, 11, 7, 4]
// arr.sort((num1, num2) => {
//   if (num1 % 2 === 0 && num2 % 2 !== 0) return -1
//   if (num1 % 2 !== 0 && num2 % 2 === 0) return 1
//   else return 0
// })

// !V2
// arr.sort((num1, num2) => (num1 % 2) - (num2 % 2 !== 0))
// console.log(arr)


