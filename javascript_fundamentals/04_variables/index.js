// VARIABLES

// A variable is a "named storage" for data. We can use variables to store goodies,
// visitors, and other data. To create a variable in JavaScript, use the let keyword
// The statement below creates a variable with the name "message":
let message;
// Now, we can put some data into it by using the assignment operator =
message = "Hello";
// The string is now saved into the memory area associated with the variable.
// We can access it using the variable name:
alert(message);

// to be concise, we can combine the variable declaration and assignmente into a
// single line:
// let msg = "Hello!";

// let user = "John";
// let age = 25;

// some people also define multiple variables in this multiline style:
let user = "John",
  age = 25,
  msg = "Hello";

// VARIABLE NAMING
// There are two limitation on variable names in JavaScript:
// 1. The name must contain only letters, digits, or the symbols $ and _.
// 2. The first character must not be a digit.

// Normally, we need to define a variable before using it. But in the old times,
// it was technically possible to create a variable by a mere assignment of the
// value without using let. This still works now if we don't put use strict in
// our script to maintin compatibility with old scripts.
num = 5;
alert(num);
// This is a bad practice and would cause an error in strict mode

// CONSTANTS
// To declare a constant (unchaning) variable, use const instead of let:
// Variables declared using constant are called "constants". They cannot be
// reassgined. An attempt to do so would cause an error:
const myBirthday = "11/29/1992";

// UPPERCASE CONSTANTS
// Capital-named constants are only used as aliases for "hard-coded" values.
