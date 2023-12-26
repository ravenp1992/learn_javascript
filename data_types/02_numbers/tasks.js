// Sum numbers from the visitor
// Create a script that prompts the visitor to enter two numbers
// and then shows their sum.
// let num1 = +prompt("First number", "");
// let num2 = +prompt("Second number", "");
// console.log(num1 + numc);

// Why 6.35.toFiex(1) == 6.3?
// console.log((6.35 * 10).toFixed(20));
// console.log(Math.round(6.35 * 10) / 10);

// Repeat until the input is a number
// function readNumber() {
//   while (true) {
//     let input = prompt("Enter a number", "");

//     if (!input && input === "CANCEL") {
//       return null;
//     }

//     if (isNaN(input)) {
//       continue;
//     } else {
//       return +input;
//     }
//   }
// }
// console.log(readNumber());

// A random number from min to max

/**
 * Generate random number from min to max
 * @param {number} min
 * @param {number} max
 */
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }
// console.log(random(1, 5));

/**
 * Generate random integer number from min to max
 * @param {number} min
 * @param {number} max
 */
function randomInteger(min, max) {
  return Math.floor(min + Math.random() * max);
}

let num = 0;
while (num < 10) {
  console.log(randomInteger(1, 5));
  num++;
}
