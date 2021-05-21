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
