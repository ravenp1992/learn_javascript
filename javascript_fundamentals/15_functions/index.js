// Functions

// Function Declaration
// To create a function we can use a function declaration

// Variables declared outside of any function, such as the outer userName in the
// code are called global.
// Global variables are visible from any function (unless shadowed by locals.)
// It's a good practice to minimize the use of global variables. Modern code has
// a few or no globals. Most variables reside in their functions. Sometimes,
// they can be useful to store project-level data.
let userName = "John";

function showMessage() {
  // A variable declared inside a function is only visible inside that function.
  // let message = "Hello, I'm JavaScript!";

  // A function can access an outer variable as well,
  // console.log(message + " " + userName);

  // The outer variable is only used if the'es no local one.
  // If a same-named variable is declared inside the function then it shadows
  // the outer one.
  let userName = "Raven";
  let msg = `Hello ${userName}`;
  console.log(msg);
}

showMessage();
showMessage();

// console.log(message); // error message is not defined

// Parameters
// We can pass arbitrary data to functions using parameters.
// In the example below, the function has two parameters: from and text

// When a value is passed as a function parameter, it's also called an argument
// 1. A parameter is the variable listed inside the parentheses in the function
// declaration (It's a declartion time term)
// 2. An argument is the value that is passed to the function when it is called

// If a function is called, but an argument is not provided, then the corresponding
// value becomes undefined.
// We can specify the so-called "default" (to use if omitted) value for a parameter
// in the function declaration, suing =
// The default value also jumps in if the parameter exists, but strictly equals
// undefined, like this.
function showMessageWithParams(from, text = "no text given") {
  console.log(from, text);
}

showMessageWithParams();

// In JavaScript, a default parameter is evaluated every time the function is
// called without the respective parameter.
// In the example below, anotherFunc() isn't called at all, if the text parameter
// is provided.
function anotherFunc() {}

function fn(from, text = anotherFunc()) {
  // TODO
}

// Modern JavaScript engines support the nullish coalescing operator ??, it's better
// when most falsy values, such as 0, should be considered "normal".
function showCount(count) {
  console.log(count ?? "unknown");
}
showCount();
showCount(0);

// Returning a value
// A function can return a value back into the calling code as the result.
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log(result);

// It is possible to use return without a value. That causes the function to
// exit immediately.
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  console.log("Showing you the movie");
}

// If a function does not return a value, it is the same as if it returns
// undefined:
function doNothing() {}
console.log(doNothing() === undefined); // true

// An empty return is also the same as return undefined:
function doNothing2() {
  return;
}
console.log(doNothing2() === undefined); // true

// Never add a newline between return and the value
// That doesn't work, because JavaScript assumes a semicolon after return.
// If we want the returned expression to wrap across multiple lines, we should
// start it at the same line as return. Or at least put the opening parentheses
// there as follows:
