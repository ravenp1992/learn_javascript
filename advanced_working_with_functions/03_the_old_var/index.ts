// "var" has no block scope
// Variables, declared with var, are either function-scoped or global-scoped. They
// are visible through blocks.

if (true) {
  var test = true;
}
console.log(test);
// As var ignores code blocks, we've got a global variable test.
// If we used let test instead of var test, then the variable would only be
// visible inside if:

// The same things for loops: var cannot be block- or loop-local:

for (var i = 0; i < 10; i++) {
  var one = 1;
}
console.log(i);
console.log(one);

// If a code block is inside a function, then var comes a function-level variable:
// function sayHi() {
//   if (true) {
//     var phrase = "Hello";
//   }
//   console.log(phrase);
// }
// sayHi();
// console.log(phrase); // ReferenceError: phrase is not defined

// "var" tolerates redeclarations
// If we declare the same variable with let twice in the same scope, that's an error:

// let user;
// let user; // SyntaxError: 'user' has already been declared

// Wit hvar, we can declared a variable any number of times. If we use var with
// an already-declared variable it's just ignored:
var user = "Pete";
var user = "John";
console.log(user);

// "var" variables can be declared below their user
// var declrations are processed when the function starts (or script start for globals)

// In other words, var variables are defined from the beginning of the function,
// no matter where the defenition is (assuming that the definition is not in the
// nested function).

function sayHi1() {
  phrase = "Hello";
  console.log(phrase);

  var phrase: string;
}
sayHi1();

// ...is technically the same as this (moved var phrase above)
function sayHi2() {
  var phrase: string;
  phrase = "Hello";
  console.log(phrase);
}
sayHi2();

// ...Or even as this (remember, code blocks are ignored):
function sayHi3() {
  phrase = "Hello";

  if (false) {
    var phrase;
  }
  console.log(phrase);
}
sayHi3();

// People also call such behavior "hoisting" (raising), because all var are "hoisted"
// (raised) to the top of the function
// So in the example above, if (false) branch never executes, but that doesn't matter.
// The var inside it is processed in the beginning of the function, so at the moment of
// (*) the variable exists.

// Declarations are hoisted, but assignments are not.
function sayHi4() {
  console.log(phrase);
  var phrase = "Hello";
}
sayHi4();
// The declaration is processed at the start of function execution (hoisted), but
// the assignment always work at the place where it appears. So the code works essentially
// like this.

function sayHi5() {
  var phrase;
  console.log(phrase); // undefined
  phrase = "Hello";
}
sayHi5();
