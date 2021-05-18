// ===================================================== Task 1

// const a = 15

// Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// const a = prompt("Введи число");
// userInput = Number(a) === 10 ? "Верно" : isNan(a) ? "Это не число" : "Неверно";
// console.log(userInput);

// ======================================================Task 5
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод добавляется к значению переменной total. Операция ввода числа продолжается
// до тех пор, пока пользователь не нажмет кнопку Cancel в prompt. После того как
// пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// Сделать проверку на то что пользователь ввел именно число.
// let input;

// let total = 0;

// while (true) {
//   const enterNumber = prompt("Введи число");

//   if (enterNumber === null) {
//     result = `Общая сумма чисел равна ${total}`;
//     break;
//   } else if (!isNaN(enterNumber)) {
//     result = `Общая сумма чисел равна ${(total += enterNumbe)}`;
//   } else {
//     result = "Введите число";
//   }
//   console.log(result);
// }

//========================================================== Task 3

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет
// значение '1', то в переменную result запишем 'зима', если имеет значение
// '2' – 'весна' и так далее. Решите задачу через switch-case.

// const num = prompt("введи число");
// let result;

// switch (+num) {
//   case 1:
//     result = "Зима";
//     break;
//   case 2:
//     result = "Весна";
//     break;
//   case 3:
//     result = "Лето";
//     break;
//   case 4:
//     result = "Осень";
//     break;
//   default:
//     result = "введи число от 1 до 4";
// }

// console.log(result);

// ======================================================== Task 6
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

//=======================решение задачи

// let browser = prompt("Дай тип браузера").toLowerCase;

// if (browser === "edge") {
//   alert("You've got the Edge!");
//   //     break;
// } else if (
//   browser === "chrome" ||
//   browser === "firefox" ||
//   browser === "safari" ||
//   browser === "opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// ========================================================= Task 4
// воспользуемся циклом while и выведите в консоль числа от 0 до 50

// let a = 0;

// while (a <= 50) {
//   console.log(a);
//   a += 1;
// }

// ========================================================= Task 7
// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 2; i < 11; i += 2) {
//   console.log(i);
// }

// ========================================================  TASK 4
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

// const age = prompt("Enter your age");

// function isAdult(age) {
//   if (age < 18) {
//     confirm("Вам точно есть 18?");
//   } else {
//     return true;
//   }
// }

// console.log(isAdult(age));

// const age = prompt("Enter your age");
// function isAdult(age) {
//   return age < 18 ? confirm("точно?") : true;
// }

// console.log(isAdult(age));
