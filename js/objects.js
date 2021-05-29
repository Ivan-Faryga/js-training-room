"use strict";

//=============================== # 10/41==============================
// Перебери объект apartment используя цикл for...in
// и запиши в массив keys все его ключи,
// а в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// let key = "";

// for (key in apartment) {
//   console.log(key);
//   keys.push(key);
//   console.log(apartment[key]);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//===================# 11/41 method hasOwnProperty() ===================
// Выполни рефакторинг решения предыдущего задания добавив
// в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   if (apartment.hasOwnProperty(key)) {
//     console.log(apartment.hasOwnProperty(key));
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }

// console.log(keys);
// console.log(values);

//===================# 12/41 method hasOwnProperty() ===================
// Напиши функцию countProps(object),
// которая считает и возвращает количество собственных свойств объекта в параметре object.
// Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//===================# 13/41 Object.keys/values(object) ===================

// Перебери объект apartment используя метод Object.keys() и цикл for...of.
// Запиши в переменную keys массив ключей собственных свойств объекта apartment,
// и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// const apartmentValues = Object.values(apartment);

// for (const key of apartmentValues) {
//   values.push(key);
// }

// console.log(values);

//===================# 14/41 Object.keys() + цикл for...of ================

// Выполни рефакторинг функции countProps(object)
// используя метод Object.keys() и, возможно, цикл for...of.

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//======================# 17/41 Массив объектов ====================

// Перебери массив объектов colors используя цикл for...of.
// Добавь в массив hexColors значения свойств hex,
// а в массив rgbColors значения свойств rgb
// из всех объектов массива colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//======================# 18/41 Массив объектов ====================

// Напиши функцию getProductPrice(productName)
// которая принимает один параметр productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name)
// в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден,
// функция должна возвращать null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const item of products) {
//     if (productName === item.name) {
//       return item.price;
//     }
//   }
//   return null;

//   // Change code above this line
// }

// console.log(getProductPrice("Radar")); //возвращает 1300.
// console.log(getProductPrice("Grip")); //возвращает 1200.
// console.log(getProductPrice("Scanner")); //возвращает 2700.
// console.log(getProductPrice("Droid")); // возвращает 400.
// console.log(getProductPrice("Engine")); // возвращает null.

//======================# 19/41     ====================

// Напиши функцию getAllPropValues(propName)
// которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем
// из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем,
// функция должна вернуть пустой массив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   //   const valuesArray = [];
//   //   for (const item of products) {
//   //     if (item.hasOwnProprety(propName)) {
//   //       valuesArray.push(item[propName]);
//   //     }
//   //   }
//   //   return valuesArray;
//   const arrProperties = [];
//   for (const item of products) {
//     if (item.hasOwnProperty(propName)) {
//       arrProperties.push(item[propName]);
//     }
//   }
//   return arrProperties;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

//===================# 25/41 Глубокая деструктуризация =============================
// Мы получили прогноз погоды на два дня, с минимальными и
// максимальными температурами,а также необязательными иконками.
// Замени объявления всех переменных одной операцией деструктуризации
// свойств объекта forecast.Задай значение по умолчанию для иконок,
// переменных todayIcon и tomorrowIcon
// - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

//===================# 25/41 ====================================
