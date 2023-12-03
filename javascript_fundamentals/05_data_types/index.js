// Data Types

// A value in JavaScript is always of a certain type.
// There are eight basic data types in JavaScript.

// Number
// The number type represents both integer and floating point numbers.
// There are many operations for numbers, e.g. multiplication, division, addition,
// subtraction, and so on.
// Besides regular numbers, there are so-called "special numeric values" which
// also belongs to this data type: Infinity, -Infinity and NaN.

// Infinity represents the mathematical Infinity. It is a special value that's
// greater than any number.
// We can get it as a result of division by zero:
// Or just reference it directly:

// NaN represents a computational error. It is a result of an incorrect or an
// undefined mathematical operation, for instance:
// NaN is sticky. Any further mathematical operation on NaN returns NaN:
// So, if there's a Nan somewhere in a mathematical expression, it propagates
// to the whole result (there's only one exception to that: NaN ** 0 is 1).

// Doing maths is "safe" in JavaScript. We can do anything: divide by zero, treat
// non-numeric strings as numbers, etc.
// The script will never stop with a fatal error ("die"). At worst, we'll get
// NaN as the result.

// BigInt
// In JavaScript, the "number" type cannot safely represent integer values larger
// than (2^53-1) (that's 9007199254740991), or less than -(2^53-1) for negatives.
// - Outside of the safe integer range there'll be a precision error.
// - All odd integers greater than (2^53-1) can't be stored at all in the "number" type.
// - BigInt type was recently added to the language to represent integers of arbitrary length.
// - A BigInt value is created by appending n to the end of an integer:
// const bigInt = 123456789123456789123456789123456789123456789123456789n;

// Strings
// A string in JavaScript must be surrounded by:
// 1. Double quotes: ""
// 2. Single quotes: ''
// 3. Backticks: ``
// In JavaScript, there is no such character type. There's only on type: string.
// A string may consist of zero, empty, one or many characters.

// Boolean (logical type)
// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means "yes, correct",
// and false means "no, incorrect".

// The "null" value
// The special null value does not belong to any of the types describe above.
// It forms a separate type of its own which contains only the null value:
// In JavaScript, null is not a "reference to a non-existing object" or "null pointer" like some other languages.
// It's just a special value whick represents "nothing", "empty", or "value unknown".

// The "undefined" value
// The meaning of undefined is "value is not assigned".
// Not recommended!

// Objects and Symbols
// The object type is special.
// All other types are called "primitive" because their values can contain only a
// single thing (be it a string or a number or whatever). In constrast, objects
// are used to store collection of data and more complex entities.

// The symbol type
// Is used to create a unique indentifiers for objects. We have to mention it here
// for the sake of completeness.

// The typeof operator
// The typeof operator returns the type of the operand. It's useful when we want
// to process values of different types differently or just want to do a quick check.
// A call to typeof x returns a string with the type name:

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);

// 1. Math is a built-in object that provides mathematical operations.
// 2. The result of type null is 'object'. That's an officially recognized error
// in typeof, comming from very early days of JavaScript and kept for compatibility.
// Definitely, null is not an object. It is a special value with a separate type of
// its own. The behavior of typeof is wrong here.
// 3. The result of typeof alert is 'function', because alert is a function.
