//====================== Module 2,  exercise 3/32 ====================

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
// }

// // Change code above this line
// console.log(checkStorage(0, 5));
// console.log(checkStorage(10, 1));
// console.log(checkStorage(10, 0));

//======================  exercise 8/32 ====================

// Чаще всего, мы заранее в коде не знаем какая будет длина массива.
// Для того, чтобы получить значение последнего элемента применяется следующий подход
// - длина массива всегда на единицу больше, чем индекс последнего элемента.
// Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex]; // 'banana'

//======================  exercise 9/32 ====================

// Напиши функцию getExtremeElements(array) которая принимает один параметр array -массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   const message = [firstElement, lastElement];

//   return message;

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//======================  exercise 21/32 ====================

// Напиши функцию findLongestWord(string),
//   которая принимает произвольную строку состоящую
// только из слов разделённых пробелом(параметр string)
// и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Change code below this line
//   const word = string.split(" ");
//   // console.log(word);
//   let longestWordLength = word[0].length;
//   let longestWord = word[0];

//   // console.log(word);

//   for (let i = 0; i < word.length; i += 1) {
//     if (word[i].length > longestWordLength) {
//       longestWordLength = word[i].length;
//       longestWord = word[i];
//     }
//   }

//   return longestWord;

//   // console.log(longestWord);
// } // Change code above this line

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

//======================  exercise 22/32 ====================

// Дополни код функции createArrayOfNumbers(min, max) так,
// чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

//======================  random exercise ==========================

// const calculateTotalPrice = function (items) {
//   console.log(items);

//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }

//   return total;
// };

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15]));
// console.log(calculateTotalPrice([20, 30, 40]));
// console.log(calculateTotalPrice([50, 60, 70]));

//====================== find login ==============================

// const logins = ["Tanya", "Vanya", "Ira", "Max"];

// const findLogin = function (logins, loginToCheck) {
//   let message = `Пользователь под именем ${loginToCheck} не найден в базе данных`;

// for (const login of logins) {
//   if (loginToCheck === login) {
//     message = `Пользователь под именем ${loginToCheck} найден в базе данных`;
//   }
// }

//=============== 2nd variant with 'includes' ===================

// if (logins.includes(loginToCheck)) {
//   message = `Пользователь под именем ${loginToCheck} найден в базе данных`;
// }

//=============== 3nd variant with 'ternar operator' ===================

//   return logins.includes(loginToCheck)
//     ? `Пользователь под именем ${loginToCheck} найден в базе данных`
//     : `Пользователь под именем ${loginToCheck} не найден в базе данных`;

//   return message;
// };

// console.log(findLogin(logins, "Vanya"));
// console.log(findLogin(logins, "Tanya"));
// console.log(findLogin(logins, "Max"));
// console.log(findLogin(logins, "Igor"));

//====================== Работа с массивом объектов ==============================
// const friends = [
//   { name: "Tanya", online: false },
//   { name: "Maxim", online: true },
//   { name: "Vanya", online: false },
//   { name: "Ira", online: true },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend.online);
// }

//=========================== поиск друга по имени

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);

//     if (friend.name === name) {
//       return "got it!!";
//     }
//   }
//   return "unfortunately, there is no friend";
// };

// console.log(findFriendByName(friends, "Maxim"));
// console.log(findFriendByName(friends, "john"));

//=========================== получиьть имена всех друзей
// const friends = [
//   { name: "Tanya", online: false },
//   { name: "Maxim", online: true },
//   { name: "Vanya", online: false },
//   { name: "Ira", online: true },
// ];

// const getAllNames = function (allFriends) {
//   const names = [];
//   //
//   for (const friend of allFriends) {
//     console.log(friend.name);
//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

//======================= получаем имена только тех друзей, которые онлайн

const friends = [
  { name: "Tanya", online: false },
  { name: "Maxim", online: true },
  { name: "Vanya", online: false },
  { name: "Ira", online: true },
];

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }

//   return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

//================= сортируем друзей по статусу онлайн в разные массивы

// const getFriendsByOnlineStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }

//     friendsByStatus.offline.push(friend);
//   }

//   return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(friends));

//=========================== как узнать количество свойств в объекте====

// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };

// console.log(Object.keys(x).lengthe);

//=============================================================

// напиши функцию которая будет суммировать соседние
//числа и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const getNewArr = function (array) {
//   const result = [];

//   console.log(arr);

//   for (let i = 0; i < array.length; i += 2) {
//     result.push(array[i] + array[i + 1]);
//   }
//   return result;
// };

// console.log(getNewArr(someArr));

//==============================================================
// TASK 5
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9];

// function array(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     // console.log(Math.sqrt(arr[i]));
//     // if (Number.isInteger(Math.sqrt(arr[i]))) {
//     if (arr[i] % Math.sqrt(arr[i]) === 0) {
//       result.push(Math.sqrt(arr[i]));
//     }
//     console.log(result);
//     // return result;
//   }
// }

// console.log(array(arr));

//============================================================'==
// TASK 8

// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ["Джаз", "Блюз", "fff", "ddd"];

// styles.push("Рок-н-ролл");
// console.log(styles);

// const index = Math.floor(styles.length / 2);
// styles.splice(index, 1, "Классика");
// console.log(styles);

// console.log(styles.shift(0));
// styles.unshift("Рэп", "Регги");
// console.log(styles);

//==============================================================

// Функция formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.

// function formatMessage(message, maxLength) {
//   let result = "";
//   // if (message.length > maxLength) {
//   //   result = message.slice(0, maxLength) + "...";
//   // } else {
//   //   result = message;
//   // }
//   // // console.log(result);
//   // return result
//   //===============
//   return message.length > maxLength
//     ? message.slice(0, maxLength) + "..."
//     : (result = message);
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); //возвращает 'Curabitur ligula...'.
// console.log(formatMessage("Curabitur ligula sapien", 23)); //возвращает 'Curabitur ligula sapien'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); //возвращает 'Nunc sed turpis...'.
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); //возвращает 'Nunc sed turpis a felis in nunc fringilla'.

//==================================================================
// TASK 9
// привести массив к одному уровню

// const tryThis = [
//   [23, 11, ["hello", "world"]],
//   "some str",
//   [777, "word", ["Привет", ["как сюда добраться"]]],
// ];

// const arr = tryThis.flat(Infinity);

// console.log(tryThis.join(",").split(","));

//==============================================================

// TASK 8

// function checkForSpam(message) {
//   // Пиши код выше этой строки
//   return (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//   );
// }

// console.log(checkForSpam("Latest technology news")); //false.
// console.log(checkForSpam("JavaScript weekly newsletter")); // false.
// console.log(checkForSpam("Get best sale offers now!")); // true.
// checkForSpam("Amazing SalE, only tonight!"); // true.
// checkForSpam("Trust me, this is not a spam message"); // true.
// checkForSpam("Get rid of sPaM emails. Our book in on sale!"); // true.
// checkForSpam("[SPAM] How to earn fast money?"); // true.

//======================= trim()
