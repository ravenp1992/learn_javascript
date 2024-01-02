// STRINGS
// In JavaScript, the textual data is stored as strings. There is no separate
// type for a single character.
// The internal format for strings is always UTF-16, it is not tied to the page
// encoding.

// QUOTES
// Strings can be enclosed within either single quotes, double quotes or backticks:

// Single and double quotes are essentially the same. Backticks, however, allow us
// to embed any expression into the string, by wrapping it in ${...}:

// Another advantage of using backticks is that hey allow a string to span multiple
// lines:
let guestList = `Guest:
* John
* Pete
* Mary`;
console.log(guestList);

// Looks natural, right? But single or double quotes do not work this way.
// If we use them and try to use multiple lines, there'll be an error:
// let guestList = "Guest:
// * John";

// Accessing characters
let str = `Hello`;
// the first character
console.log(str[0]);
console.log(str.at(0));
// the last character
console.log(str[str.length - 1]);
console.log(str.at(-1));

// We can also iterate over characters using for..of:
for (let char of "Hello") {
  console.log(char);
}

// Strings are immutable
// let str2 = "Hi";
// str2[0] = "h"; // error
// console.log(str2[0]); // doesn't work

// The usual workaround is to create a whole new string and assign it to str
// instead of the old one.
let str2 = "Hi";
str2 = "h" + str2[1];
console.log(str2);

let str3 = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str3.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

// includes, startsWith, endsWith

console.log("Widget with id".includes("Widget"));
console.log("Hello".includes("Bye"));

// The optional second argument of str.includes is the position to start
// searching from:
console.log("Widget".includes("id")); // true
console.log("Widget".includes("id", 3)); // false, from position 3 there is no "id"

// The methods str.startsWith and star.endsWith do exactly what they say:
console.log("Widget".startsWith("Wid"));
console.log("Widget".endsWith("get"));

// Getting a substring

// str.slice(start[, end])
// Returns the part of the string from start to (but not including) end.
let strDemo1 = "stringify";
console.log(strDemo1.slice(0, 5));
console.log(strDemo1.slice(0, 1));

// If there is no second argument, then slice goes till the end of the string
console.log(strDemo1.slice(2));
console.log(strDemo1.slice(-4, -1)); // gif

// str.substring(start[,end])
// Returns the part of the string between start and end (not including end)

// This is almost he same as slice, but it allows start to be greater than
// end (in this case it simply swaps start and end values).

let strDemo2 = "stringify";
console.log(strDemo2.substring(2, 6));
console.log(strDemo2.substring(6, 2));

// ...but not for slice:
console.log(strDemo2.slice(2, 6));
console.log(strDemo2.slice(6, 2));

// str.substr(start[, end])
// Returns the part of the string from start, with the given length.
let strDemo3 = "stringify";
console.log(strDemo3.substr(2, 4)); // deprecated

// Comparing strings
// As we know fro mthe chapter Comparison, strings compared character-by-character
// in alphabetical order.

// Although, there are some oddities.

// 1. A lowercase letter is always greater than the uppercase:
console.log("a" > "Z");

// 2. Letters with diacritical mars are "out of order":
console.log("Österreich" > "Zealand");
// This may lead to strange results if we sort these country names. Usually people
// would expect Zealand to come after Österreich in the list

// To understand what happens, we should be aware that strings in JavaScript are
// encoded using UTF-16. That is: each character has a corresponding numeric codes.

// There are special methdos that allow to get the character for the code and back:

// str.codePointAt(pos)
// Returns a decimal number representing the code for the character at position pos:
console.log("Z".codePointAt(0));
console.log("z".codePointAt(0));
console.log("z".codePointAt(0).toString(16));

// String.fromCodePoint(code)
// Creates a character by its numeric code
console.log(String.fromCodePoint(90));
console.log(String.fromCodePoint(0x5a)); // we can also use a hex value as an argument

let chars = "";

for (let i = 65; i <= 220; i++) {
  chars += String.fromCodePoint(i);
}
console.log(chars);

// Correct comparisions
// The 'right' algorithm to do string comparisons is more complex that it may seem,
// because alphabets are different for different languages.

// So, the browser needs to know the language to compare.

// Luckily, modern browsers support the internationalization standard ECMA-402.
// It provides a special method to compare strings in different languages, following
// their rules.

// The call str.localCompare(str2) returns an integer indicating whether str is
// less, equal or greater than str2 according to the language rules:

// - Returns a negative number if str is less than str2.
// - Returns a positive number if str is greater than str2.
// - Returns 0 if they are equivalent.

// For instance:
console.log("Österreich".localeCompare("Zealand")); // -1
// This method actually has two additional arguments in the documentation, which
// allows it to specify the language (by default taken from the environment, letter
// order depends on the language) and setup additional rules like case sensitivity
// or should "a" and "á" be treated as the same etc.

// SUMMARY

// There are 3 types of quotes, Backticks allow string to span multiple lines and embed expressions ${...}
// We can use special characters, such as a line break \n.
// To get a character, use: [] or at method.
// To get a substring, use: slice or substring.
// To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
// To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
// To compare strings according to the language, use: localeCompare, otherwise they
// are compared by character codes.

// There are several other helpful methods in strings:
// str.trim() - removes ("trims") spaces from the beginning and end of the string.
// str.repeat(n) - repeats the string n times.

// Strings also have methods for doing search/replace with regular expressions. But
// that's a big topic, so it's explained in a separate tutorial.

// Also, as of now it's important to know that strings are base on UniCode encoding,
// and hence there're issues with comparisions.
