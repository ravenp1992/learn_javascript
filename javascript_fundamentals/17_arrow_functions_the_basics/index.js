// Arrow functions, the basics

// There'e another very simple and concise syntax for creating functions,
// that's often better than Function Expressions.
// It's called "arrow functions", because it looks like this:
let sum = (a, b) => a + b;

// If we have only one argument, then parentheses around parameters can be
// omitted, making that even shorter.
let double = (n) => n * 2;

// If there are no argumentts, parentheses are empty, but they must be present:
let sayHi = () => console.log("Hello!");

// Arrow functions can be used in the same way as Function Expressions.
// For instance, to dynamically create a function:
let welcome =
  31 < 18 ? () => console.log("Hello!") : () => console.log("Greetings!");

welcome();

// Sometimes we need a more complex function, with multiple expressions and statements.
// In that case, we can enclose them in curly braces. The major difference is that
// curly braces requires a return within them to return a value (just like a regular
// function does)
let demo = (a, b) => {
  let result = a + b;
  return result;
};
console.log(demo(1, 2));
