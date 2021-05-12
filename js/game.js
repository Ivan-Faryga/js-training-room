"use strict";

// const minNumb = 1
// const maxNumb = 100

const secretNumber = Math.round(Math.random() * 100 + 1);
// console.log(secretNumber);

let userNumber;

do {
  userNumber = Number.parseInt(prompt("Enter a number"));
  //   console.log("userNumber", userNumber);

  if (secretNumber === userNumber) {
    console.log("You won");
  } else if (secretNumber > userNumber) {
    console.log("x >", userNumber);
  } else if (secretNumber < userNumber) {
    console.log("x <", userNumber);
  } else {
    console.log("exit");
  }
} while (secretNumber !== userNumber && !isNaN(userNumber));
