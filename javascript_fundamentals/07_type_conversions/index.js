// Type Conversions

// String Conversion
let value = true;
console.log(typeof value);

value = String(value); // now value is a string "true"
console.log(typeof value);

// Numeric Conversion
// Numeric conversion in mathematical functions and expressions happens automatically.
// For example, when division / is applie to non-numbers:
alert("6" / "2"); // 3, strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123
console.log(typeof num); // number

// Explicit conversion is usually required when we read a value from a string-based
// source like a text form but expect a number to be entered.
// If the string is not a valid number, the result of such a conversion is NaN.
let age = Number("an arbitrary string instead of a number");
console.log(age); // NaN, conversion failed

// Numeric conversion rules:
// undefined -> NaN
// null -> 0
// true and false -> 1 and 0
// string -> Whitespaces (includes spaces, tabs, newlines etc.) from the start and
// end are removed. If the remaining string is empty, the result is 0. Otherwise
// the number is "read" from the string. An error gives NaN.

// Boolean Conversion
// Values that are intuitively "empty", like 0, an empty string, null, undefined, and NaN, become false.
// Other values becomes true.

// 0, null, undefined, NaN, "" -> false
// any other value -> true
