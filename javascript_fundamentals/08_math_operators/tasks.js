// The postfix and prefix forms
// What are the final values of all variables
let a = 1;
let b = 1;

let c = ++a;
let d = b++;

console.log(a); // 2
console.log(b); // 2
console.log(c); // 2
console.log(d); // 1

// Assignment result
// What are the values of y and x after the code below
let y = 2;
let x = 1 + (y *= 2);
console.log(y); // 4
console.log(x); // 5

// Type conversions
console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5); // $45
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // -9  5
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log("\t \n" - 2); // -2

let firstNumber = prompt("First number?", 1);
let secondNumber = prompt("Second number?", 2);
console.log(Number(firstNumber) + Number(secondNumber));

// for (let a = 1, b = 3, c = a * b; a < 10; a++) {
//   console.log(c);
// }
