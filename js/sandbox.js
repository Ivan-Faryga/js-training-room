//======================== some practice ===============================
// let name, admin;
// name = "John";
// admin = name;
// alert(admin);

//======================== right names for variables ===================
// ourPlanetName;
// currentUserName;

//======================== types of data ================================
// there are 9 types if it:

// string
// number (infinity  -infinity     NaN)
// bigint
// boolean
// null
// undefined
// object
// symbol

//===================== alert  prompt confirm ==========================

// let name = prompt("напиши свое имя", 47);

// alert(`Тебя зовут ${name}`); // Тебе 100 лет!

//====================== преобразование строк и чисел ===================

// let value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value);

// console.log("6" + "2");

// let age = Number("Любая строка вместо числа");

// alert(age); // NaN, преобразование не удалось

// let num = null;
// alert(typeof num);

// num = Number(num);
// console.log(num);
// alert(typeof num);

//===================== basic math operators ============================

// alert(3 ** 5); // возведение в степень
// alert(100 % 3); // остаток от деления
// alert(81 ** (1 / 2)); // извлечение корня квадратного
// alert(27 ** (1 / 3)); // извлечение корня кубического

//=======================================================================

// alert("" + 1 + 0); // 1
// alert("" - 1 + 0); // -1
// true + false; // 1
// 6 / "3"; // 2
// "2" * "3"; // 6
// 4 + 5 + "px"; // 9px
// "$" + 4 + 5; // $45
// "4" - 2; // 2
// "4px" - 2; // NaN
// 7 / 0; // infinity
// "  -9  " + 5; // ' -9 5'
// "  -9  " - 5; // -14
// null + 1; // 1
// undefined + 1; // NaN
// " \t \n" - 2; // строка приводится 0 //  0 - 2 = -2

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12

//======================== cycle 'do...while' ============================

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

//============================ cycyle for ================================

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

//=========================== break ======================================

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
//   if (i === 5) {
//     console.log("Дошли до 5-й итерации, прерываем цикл!");
//     break;
//   }
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

//====================== random exercise =================================

// const cart = [22, 45, 11, 21, 78, 56];

// // создать переменную  для суммы,
// // перебрать массив
// // сложить элементы

// // let totalSum = 0;

// // // for (i = 0; i < cart.length; i += 1) {
// // //   totalSum += cart[i];
// // // }

// // for (const item of cart) {
// //   totalSum += item;
// // }

// // console.log("Total: ", totalSum);

// // добавить к массиву ндс

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);

//============================ четные числа ============================
// const numbers = [1, 2, 3, 18, 45, 10, 30, 25, 13, 15, 16];

// let newArray = [];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     newArray.push(number);
//   }
// }

// console.log(newArray);

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//     newArray.push(numbers[i]);
//   }
// }

//=========================== using 'continue' ===========================

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log("пропустить это число", number);
//     continue;
//   }
// }

// console.log(total);
// console.log(newArray);

//=========================== looking for correct login ==================

// const logins = ["Vanya", "Tanya", "Ira", "Dima", "Maxim"];
// const loginToFind = "Tanya";

// let message = `пользователь ${loginToFind} не найден в базе данных`;

// for (const login of logins) {
//   if (loginToFind === login) {
//     message = `пользователь ${loginToFind} найден в базе данных`;
//   }
// }

// console.log(message);

//======= 2nd variant =======

// const message = logins.includes(loginToFind)
//   ? `пользователь ${loginToFind} найден в базе данных`
//   : `пользователь ${loginToFind} не найден в базе данных`;

// console.log(message);

//================== looking for smallest numbers ========================
// const numbers = [2, 3, 18, 45, 10, 30, 1, 25, 13, 15, 16];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log("smallest number is", smallestNumber);

//===================== concatinating array into string ===================

const logins = ["Vanya", "Tanya", "Ira", "Dima", "Maxim"];

let string = logins.join(", ");
console.log(string);
