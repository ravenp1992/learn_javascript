// METHODS OF PRIMITIVES

// JavaScript allows us to work with primitives (strings, numbers, etc.) as if
// they were objects. They also provide methods to call as such.

// Let's look at the key distinction between primitives and objects.

// A primitive
// - Is a value of a primitive type.
// - There are 7 primitive types: string, number, bigint, boolean, symbol, null
// and undefined.

// An object
// - Is capable of storing multiple value as properties
// - Can be created with {}, for instance: {name: "John", age: 30}. There are
// other kinds of objects in JavaScript: functions, for example, are objects.

// One of the best things about objects is that we can store a function as one of
// its properties.
let john = {
  name: "John",
  sayHi: function () {
    console.log("Hi buddy!");
  },
};
john.sayHi();

// So here we've made an object john with the method sayHi.
// Many built-in objects already exist, such as those that work with dates, errors,
// HTML elements, etc. They have different properties and methods.

// But, these features come with a cost!
// Object are "heavier" than primitives. They require additional resources to
// support the internal machinery.

// A PRIMITIVE AS AN OBJECT

// Here's the paradox faced by the creator of JavaScript:

// - There are many things one would want to do with a primitive, like a string
// or number. It would be great to access them using methods.
// - Primitives must be as fast and lightweight as possible.

// The solution looks a little bit awkward, but here it is:
// 1. Primitives are still primitive. A single value, as desired.
// 2. The language allows access to methods and properties of strings, numbers,
// booleans and symbols.
// 3. In order for that to work, special "object wrapper" that provides the
// extra functionality is created, and then is destroyed.

// The "object wrappers" are different for each primitive type and are called:
// String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets
// of methods.

// For instance, there exists a string method str.toUpperCase() that returns a
// capitalize str.

let str = "Hello";
console.log(str.toUpperCase()); // HELLO

// Here's what actually happens in str.toUpperCase()
// 1. The string str is a primitive. So in the moment of accessing its property,
// a special object is created that knows the value of the string, and has useful
// methods, like toUppercase().
// 2. That method runs and returns a new string
// 3. The special object is destroyed, leaving the primitive str alone.

// So primitives can provide methods, but they still remain lightweight.

// The JavaScript engine highly optimizes this process. It may even skip the
// creation of the extra object at all. But it must still adhere to the specification
// and behave as it creates one.

// A number has methods of its own, for instance, toFixed(n) rounds the number
// to the given precision:
let n = 1.23456;
console.log(n.toFixed(2)); // 1.23

// Constructors String/Number/Boolean are for internal use only
// Some languages like Java allow us to explicitly create "wrapper object" for
// primitives using a syntax like new Number(1) or new Boolean(false)

// In JavaScript, that's also possible for historical reasons, but highly unrecommended.
// Things will go crazy in several places.

console.log(typeof 0); // "number"
console.log(typeof new Number(0)); // object

// Objects are always truthy in if, so here the alert will show up:
let zero = new Number(0);
if (zero) {
  console.log("zero is truthy!?!");
}

// On the other hand, using the same functions String/Number/Boolean without new
// is totally fine and useful thing, They converted a value to the corresponding
// type: to a string, a number, or a boolean (primitive).
let num = Number("123"); // convert a string to a number

// null/undefined have no methods
// The special primitive null and undefined are exceptions. They have no corresponding
// "wrapper objects" and provide no methods. In a sense, they are "the most primitive".

// An attempt to access a property of such value would give the error:
console.log(null.test); // error

// SUMMARY
// 1. Primitives except null and undefined provide many helpful methods.
// 2. Formally, these methods work via temporary objects, but JavaScript engines are
// well tuned to optimize that internally, so they are not expensive call.
