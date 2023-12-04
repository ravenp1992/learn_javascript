// Logical Operators

// There are four logical operators in JavaScript:

// || (OR)
console.log(true | true);
console.log(false | true);
console.log(true | false);
console.log(false | false);

// If an operand is not a boolean, it's converted to a boolean for the evaluation
if (1 || 0) {
  console.log("truthy!");
}

// Most of the time, OR || is used in an if statement to test if any of the
// given conditions is true.
let hour = 0;
if (hour < 10 || hour > 18) {
  console.log("The office is closed.");
}

// OR "||" finds the first truthy value

// The OR || operator does the following:
// 1. Evaluates operands from left to right.
// 2. For each operand, converts it to boolean. If the result is true, stops
// and returns the original value of the operand.
// 3. If all operands have been evaluated return the last operand

console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 11
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

// Short-circuit evaluation
// Another feature of OR || operator is the so-called "short-circuit" evaluation.

// It means that || processes its argument until the first truthy value is reached,
// and then the value is returned immediately, without even touching the other
// argument.

// The importance of this feature becomes obvious if an operand isn't just a value,
// but an expression with a side effect, such as variable assignment or a function
// call.
true || console.log("not printed");
false || console.log("printed");

// && (AND)
console.log(true & true); // true
console.log(false & true); // false
console.log(true & false); // false
console.log(false & false); // false

let h = 12;
let m = 30;

if (hour == 12 && minute == 30) {
  console.log("The time is 12:30");
}

if (1 && 0) {
  console.log("Won't work, because the result is falsy");
}

// AND "&&" finds the first falsy value

// The AND && operator does the following:
// 1. Evaluates operands from left to right.
// 2. For each operand, converts it to a boolean. If the result is false, stops
// and returns the original value of that operand
// 3. If all operands have been evaluated, return the last operand

// In other words, AND returns the first falsy value or the last value if none
// were found.
console.log(1 && 0);
console.log(1 && 5);

console.log(null && 5);
console.log(0 && "no matter what");

console.log(1 && 2 && null && 3);
console.log(1 && 2 && 3);

// The precedence of AND && operator is higher than OR ||

// ! (NOT)

// The operator accepts a single argument and does the following;
// 1. Converts the operand to boolean type: true / false
// 2. Returns the inverse value.
console.log(!true);
console.log(!0);

// A double NOT !! is sometimes used for converting a value to boolean type;
console.log(!!"non-empty string");
console.log(!!null);

// There's a little more verbose way to do the same thing - a built-in Boolean
// function:
console.log(Boolean("non-empty string"));
console.log(Boolean(null));

// The precedence of NOT ! is the highest of all logical operators, so it
// always executes first, before && or ||.

// ?? (Nullish Coalescing)
