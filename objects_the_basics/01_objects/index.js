// Object

// An object can be created with figure brackets {...} with an optional list of
// properties. A property is a "key value" pair, where key is a string (also
// called property name), and value can be anything.

// An empty object can be created using one of two syntax:
let user = new Object(); // "object constructor" syntax
let thing = {}; // "object literal" syntax

// Usually, the figure brackets {...} are used. That declaration is called
// an "object literal".

// Literal and properties
let person = {
  name: "Raven",
  age: 30,
};

// Property values are accessible using the dot notation.
console.log(person.name);
console.log(person.age);

// To add a property
person.isMarried = true;

// To remove a property, we can use the delete operator;
delete person.age;

// We can also use multiword property names, but then they must be quoted:
let animal = {
  name: "barky",
  age: 4,
  "likes running": true,
};

// Square brackets
// For multiword properties, the dot access doesn't work:
// There's an alternative "square bracket notation" that work on any string:
console.log(animal["likes running"]);

// Square brackets also provide a way to obtain the property name as the result
// of any expression - as opposed to a literal string - like from a variable as
// follows:
let key = "likes running";

console.log(animal[key]);

// Computed properties

// We can use square brackets in an object literal, when creating an object.
// That's called computed properties.

// For instance:

// let fruit = prompt("Which fruit to by?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// console.log(bag.apple);

// We can use more complex expression inside square brackets:
let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5,
};
console.log(bag);

// Square brackets are much more powerful than dot notation. They allow any
// property names and variables. But they are also more cumbersome to write.

// So most of the time, when property names are known and simple, the dot is used.
// And if wee need more complex, then we stich to square brackets.

// Property value shorthand
/**
 * @typedef {Object} User
 * @property {string} name - The name
 * @property {number} age - The age
 */

/**
 * Create a user
 * @param {string} name The name of the user
 * @param {number} age The age of the user
 * @return {User} The newly create user
 */
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
  };
}

// Property names limitation
// As we already know, a variable cannot have a name equal to one of the language
// reserveed words like "for", "let", "return" etc.

// But for an object property, there's no such restriction:
let obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log(`${obj.for + obj.let + obj.return}`);
// In short, there are no limitations on property names.

// Other types are automatically converted to strings.

// For instance, a number 0 becomes a string "0"
let obj1 = {
  0: "test", // same as "0": "test"
};
// both console logs access the same property (the number 0 is converted to string)
console.log(obj1["0"]);
console.log(obj1[0]);

// There's a minor gotcha with a special property name __proto__. We can't
// set it to a non-object value:
let obj2 = {};
obj2.__proto__ = 5; // assign number
console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

// Property existence test, "in" operator

// A notable feature of objets in JavaScript, comapred to many other langauges, is
// that it's possible to access any property. There will be no error if the property
// doesn't exists!

// Reading a non-existing property just returns undefined.
let user1 = {};
console.log(user1.noSuchProperty === undefined); // true

// There's also a special operator "in" for that.
// The syntax is: "key" in object
let user2 = { name: "tintin", age: 31 };
console.log("age" in user2); // true
console.log("blabla" in user2); // false
// Please note that on the left side of in there must be a property name. That's
// usually  a quoted string.

// If we omit quotes, that means a variable should contain the actual name to be
// tested. For instance:
let user3 = { age: 30 };
let k = "age";
console.log(k in user3);

// Why does the in operator exists? Isn't it enough to compare against undefined/

// Well, most of the time the comparison with undefined works fine. But there's
// a special case when it fails, but "in" works correctly.

// It's when an object property exists, but stores undefined:
let obj4 = {
  test: undefined,
};

console.log(obj4.test); // it's undefined, so - no such property?
console.log("test" in obj); // true, the property does exists.

// Situations like this happen very rarely, because undefined should not be
// explicitly assigned. We mostly use null for 'unknown' or 'empty' values.
// So the in operator is an exotic quest in the code.

// The "for..in" loop
// To walk over all keys of an object, there exists a special form of loop: for..in
// This is completely different thing from the for(;;) construct that we studied
// before.

// For instance, let's output all properties of user:
let user5 = {
  name: "iya",
  age: 7,
  isAdmin: true,
};

for (let key in user5) {
  console.log(key);
}

// Oredered like an object
// Are object ordered? In other words, if we loop over an object, do we get all
// properties in the same order they wre added? Can we rely on this?

// The short answer is: "ordered in a special fashon": integer properties are
// sorted, other appears in creation order. The details follow.

let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

for (let code in codes) {
  console.log(code);
}

// Integer properties? What's that?
// The "integer property" term here means a string that can be converted to-and-from
// an integer without a change.

// S0, "49" is an integer property name, because when it's transformed to an integer
// number and back. It's sttill the same. But "+49" and "1.2" are not:
console.log(String(Math.trunc(Number("49")))); // "49", same, integer property
console.log(String(Math.trunc(Number("+49")))); // "49", not the same "+49" not integer propertty
console.log(String(Math.trunc(Number("1.2")))); // "1", not the same "1.2" not integer property

// On the other hand, if the keys are non-integer, then they are listed in the creation
// order, for instance:
let user6 = {
  name: "John",
  surname: "Smith",
};
user6.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user6) {
  console.log(prop); // name, suername, age
}
