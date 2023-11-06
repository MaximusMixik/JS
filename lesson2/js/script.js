

// !!!!!!!!!!!!!!! LESSON 1
// console.log("Hello beach!!!");
// document.write('hello beach!')

// const name = ' Max';
// const age = 28;
// document.write(` <h1>Hello world, my name ${name}, I have ${age} years old</h1>`)
// alert(`Hello world, my name ${name}, I have ${age} years old`) //діалогове вікно

// console.log(`Hello world, my name ${name}, I have ${age} years old`); //консоль

// \n- перехід на новий рядок


// prompt(`Hello world, my name ${name}, I have ${age} years old`)

// let userName = prompt(' Your name?', 'Name');

// document.write(` <h1>Hello world, my name ${userName}</h1>`)


// summ in promt
// let a = parseInt(prompt('first num', '1'))
// let b = parseFloat(prompt('second num', '20.45'))
// let sum = a + b
// document.write(` <h1>Summ  ${sum}</h1>`)


// count

// let boxCount = parseInt(prompt('Кількість ящиків', '0'))
// let boxWeight = parseFloat(prompt('Вага ящика', '0'))

// let summ = boxCount * boxWeight

// document.write(` <h1>Summ  ${summ.toFixed(2)}, загальна вага</h1>`)


// console.log('')

// document.write('')

// alert('')

// prompt('', '')


// \n

// let

// const

// parseInt

// parseFloat

// toFixed(2)

// i++ ++i --i i--

// isFinite()

// NaN



// 03:04:00 Алгоритми (сценарій)
// let tiketCost = parseFloat(prompt('Ціна квитка ', '10'))
// let passangerNumber = parseInt(prompt('Кількість пасажирів ', '0'))

// let totalPrice = tiketCost * passangerNumber;
// document.write(sum)

//! 03:14:00 Алгоритми (сценарій)
// вхідні данні, введення величин
// let adultTicketCost = parseFloat(prompt('Ціна квитка для дорослих ', '10'))
// let childTicketCost = parseFloat(prompt('Ціна квитка для дітей', '3.5'))
// let adultPassangersNumber = parseInt(prompt('Кількість  дорослих пасажирів ', '0'))
// let childPassangersNumber = parseInt(prompt('Кількість дітей пасажирів ', '0'))

// // обчислення,  проміжні значення
// let adultTotalPrice = adultTicketCost * adultPassangersNumber;
// let childTotalPrice = childTicketCost * childPassangersNumber;

// //обчислення, результат
// let totalPrice = adultTotalPrice + childTotalPrice;

// // вивід результату
// document.write(` <h1>загальна ціна =  ${totalPrice}; </h1>`)
// // кінець


//! 03:21:00

// крок 0 позначення та вхідні данні
// let rentPrice = parseFloat(prompt(' плата за місяць', '12350грн'))
// const MONTHS_IN_YEAR = 12;
// const MONTHS_IN_TWO_YEAR = 24;
// const MONTHS_IN_TEN_YEAR = 120;


// let priseOneYear = rentPrice * MONTHS_IN_YEAR
// let priseTwoYear = rentPrice * MONTHS_IN_TWO_YEAR
// let priseTenYear = rentPrice * MONTHS_IN_TEN_YEAR

// document.write(` <h1> Загальна ціна за рік =  ${priseOneYear}; <br>
//  Загальна ціна за два роки =  ${priseTwoYear}; <br>
//  Загальна ціна за десять років =  ${priseTenYear}; <br>
// </h1>`)


// !!!!!!!!!!!!!!! LESSON 2

// Math.floor // округлення до вищого
// Math.ceil  // округлення до нижчого
// Math.round // округлення звичайне
// Math.trunc //відсікання