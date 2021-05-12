// const message = 'Js is awesome'

// const name = true;

// // // const isConforming = prompt('Please confirm hotel reservation');

// // const x = 80;
// // const y = 5;

// console.log (typeof name)

// const message = 'Хотите продлить подписку?';

// const shouldRenew = confirm(message);
// console.log(shouldRenew);

// let typeOfSub = prompt('Укажите тип подписки');
// typeOfSub = Number(typeOfSub);
// console.log(typeOfSub);
// console.log(typeof typeOfSub);

// let elementWidth = '80px';
// const result = Number.parseInt(elementWidth);

// console.log(result);

// elementWidth = Number.parseInt(elementWidth);
// console.log('Element width: ', elementWidth);

// let elementHeight = '200.74px'
// elementHeight = Number.parseFloat(elementHeight);
// console.log('element height: ', elementHeight);

// let salary = 1500.48645;
// salary = Number(salary.toFixed(3));
// // salary = Number(salary);
// console.log(salary);

// let base = prompt('давай число');
// base = Number(base);
// console.log(base);

// let power = prompt('давай степень');
// power = Number(power);
// console.log(power);

// const result = base ** power;

// console.log(result);

// const max = 40;
// const min = 20;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const colors = ['tomato', 'teal', 'orange', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;

// const quantity = 56;

// const orderMsg = `You order ${quantity} fishing rods`

// console.log(orderMsg);

// const firstName = 'Tanya';
// const lastName = 'Faryga';
// const apartNumber = '15';

// const templateMsg = `Guest ${firstName} ${lastName} your apartment number is ${apartNumber}`;
// console.log(confirm(templateMsg));

// function sayHi() {
//   console.log("Hello, this is my first function!");
// }

// sayHi();

//============= cycle training ====================

// for (let i = 5; i <= 10; i += 3) {
//   console.log(i);
// }

//===============задача  - написать скрипт который подсчитывает общую сумму зарплат работников

// 1. создать переменные

const minSalary = 500;
const maxSalary = 5000;

const employees = 3;

let totalSalary = 0;

// 2.  перебрать работников в цикле

for (let i = 1; i <= employees; i += 1) {
  // сгенерировать случаюную ЗП
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );

  console.log(`ЗП работника номер ${i} - ${salary}`);

  // прибавить к тоталу
  totalSalary += salary;
}

// вывести лог
console.log("totalSalary: ", totalSalary);
