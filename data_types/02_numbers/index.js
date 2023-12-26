// Numbers

// In modern JavaScript, there are two types of numbers:

// 1. Regular numbers in JavaScript are store in 64-bit format IEEE-754, also
// known as "double precision floating point numbers.". These are numbers that
// we'ere using most of the time, and we'll talk about them in this chapter.

// 2. BigInt numbers represent integers of arbitrary length. They are sometimes
// needed because a regular integer number can't safely exceed (2^53-1) or be
// less -(2^53-1), as we mentioned earlier in the chapter Data types. As bigints
// are used in few special areas, we devote them a special chapter BigInt.

// More ways to write a number

// We can use underscore _ as the separator
// let billion = 1_000_000_000;

// Here the undescore _ plays the role of the "syntactic sugar", it makes the number
// more readable. The JavaScript engine simply ignores _ between digits.

// In real life though, we try to avoid writing long sequences of zeroes. We're
// too lazy for that.

// In JavaScript, we can shorten a number by appending the letter "e" to it and
// specifying the zeroes count:
let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes

// In other words, e multiplies the number by 1 with the given zeroes count.
// 1e3 = 1 * 1000; // e3 means *1000
// 1.23e6 === 1.23 * 1000000; // e6 means *1000000

// Now let's write something very small. Say, 1 microsecond (one millionth of a second):
// let mcs = 0.000001;

// Just like before, using "e" can help. If we'd like to avoid writing zeroes
// explicitly, we could write the same as:
let mcs = 1e-6; // five zeroes to the left from 1
// If we count the zeroes in 0.000001, there are 6 of them. So naturally it's 1e-6.

// In other words, a negative number after "e" means a division by 1 with the given
// number of zeroes:

// 1e-3 === 1 / 1000; // 0.001
// 1.23e-6 === 1.23 / 1000000; // 0.00000123
// 1234e-2 == 1234 / 100; // 12.34, decimal point moves 2 times.

// HEX, BINARY AND OCTAL NUMBERS
// Hexadecimal numbers are widely used in JavaScript to represent colors, encode
// characters, and for many other things. So naturally, there exists a shorter
// way to write them: 0x and then the number.

console.log(0xff); // 255
console.log(0xff); // 255 (the same, case doesn't matter)

// Binary and octal numeral systems are rarely used, but also supported using the
// 0b and 0o prefixes:
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log(a == b);

// toString(base)
// The method num.toString(base) returns a string representation of num in the
// numeral system with the given base.

let num = 255;
console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111

// The base can vary from 2 to 36. By default it's 10.
// Common use cases for this are:
// base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F
// base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.
// base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alhabet is
// used to represent a number. A funny, but useful case for 36 is when we need to turn
// a long numberic identifer into something shoter, for example to make short
// url. Can simply represent it in the numeral system with base 36:

console.log((123456).toString(36));

// ROUNDING
// One of the most used operations when working with numbers is rounding.
// There are several built-in functions for rounding:

// Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4,
// the middle case: 3.5 rounds up to 4 too.

// Math.trunc (not supported by internet explorer)
// Removes anything after the decimal point without rounding: 3.1 comes 3, -1.1
// becomes -1.

// parseInt and parseFloat
// They "read" a number from a string until they can't. In case of an error, the
// gathered number is returned. The function parseInt returns an integer, whilst
// parseFloat will return a floating-point number:
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5
console.log(parseInt("12.3")); // 12, only the integer part is returned
console.log(parseFloat("12.3.4")); // 12.3, the second point stops the reading

// Summary

// To write number with many zeroes:
// - Append "e" with the zeroes count to the number. Like: 123e6 is the same as
// 123 with 6zeroes 123_000_000.
// - A negative number after "e" causes the number to be divided by 1 with given
// zeroes. E.g. 123e-6 means 0.000123 (123 millionts).

// For different numeral systems:

// - Can write numbers directly in hex (0x), octal (0o) and binary (0b) systems.
// - parseInt(str, base) parses the thing str into an integer in numeral system
// with given base, 2 <=base <= 36
// - num.toString(base) converts a number to a string in the numeral system with
// the given base.

// For regular number tests:
// isNaN(value) converts its argument to a number and then tests it for being NaN
// Number.isNaN(value) checks whether its argument belongs to the number type, and
// if so, tests it for being NaN
// isFinite(value) converts its argument to a number and then tests it for not being
// NaN/Infinity/-Infinity
// Number.isFinite(value) checks whether its argument belongs to the number type,
// and if so, tests if for not being NaN/Infinity/-Infinity.

// For conerting values like 12pt and 100px to a number:
// Use parseInt/parseFloat for the "soft" conversion, which reads a number from
// a string and then returns the value they could read before the error.

// For fractdions:
// Rounding using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision)
// Make suret to remember there's a loss of precision when working with fractions.
