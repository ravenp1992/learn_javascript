// Object methods, "this"

// Objects are usually created to represent entities of the real world, like
// users, orders and so on:

// let user = {
//   name: "John",
//   age: 30,
// };

// And, in the real world, a user can act: select somethting from the shopping
// card, login, logout etc.

// Actions are represented in JavaScript by functions in properties:

// Methods examples:

// let user = {
//   name: "John",
//   age: 30,
// };

// user.sayHi = function () {
//   console.log("Hello!");
// };

// Here we've just used a Function Expression to create a function and assign
// it to the property user.sayHi of the object.
// Then we call it as user.sayHi(). The user can now speak!
// A function that is a property of an object is called method.
// So, here we've got a method sayHi of the object user.

// Method shorthand
// There exists a shorter syntax for methods in an object literal:

// let user = {
//   sayHi: function () {
//     console.log("Hello");
//   },
// };
// user.sayHi();

// method shorthand looks better, right?
// let user = {
//   sayHi() {
//     console.log("Hello");
//   },
// };
// user.sayHi();

// "this" in methods
// It's common that an object method needs to access the information stored in the
// object to do its job.

// For instance, the code inside user.sayHi() may need the name of the user
// To access the object, a method can use the this keyword.

// The value of this is object "before dot", the one used to call the method.
// For instance:

// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     console.log(`Hello ${this.name}`);
//   },
// };
// user.sayHi();

// Here during the execution of user.sayHi(), the value of this will be user.

// "this" is not bound
// In JavaScript, keyword this behaves unlike most other programming languages.
// It can be used in any function, even if it's not a method of an object.

// There's no syntax error in the following example:

// function sayHi() {
//   console.log(this.name);
// }
// sayHi();

// The value of this is evaluated during the run-time, depending on the context
// For instance, here the same function is assigned to two different objects
// and has different "this" in this calls:

// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
// user.f(); // john (this == user)
// admin.f(); // admin (this == admin)

// admin["f"](); // Admin (dot or square brackets access the method - doesn't matter)

// The rule is simple: if obj.f() is called, then this is obj during the call of f.
// So it's either user or admin in the example above.

// Calling without an object: this == undefined
// We can even call the function without an object at all:

// function greetings() {
//   console.log(this);
// }
// greetings();

// In this case 'this' is 'undefined' in strict mode. If we try to access this.name,
// there will be an error.

// In non-strict mode the value of this is such case will be global object (window
// in a browser, we'll get to it later in the chapter Global object). This is
// historical behavior that "use strict" fixes.

// Usually such call is a programming error. If there's this inside a function, it
// expects to be called in a n object context.

// The consequences of unbound this
// If you have come from another programming language, then you are probably used
// to the idea of a "bound" this, where methods defined in an object always have
// this referencing that object

// In JavaScript this is "free", its value is evaluated at call-time and does not
// depend on where the method was declared, but rather on what object is "before
// the dot".

// The concept of a run-time evaluated this has both pluses and minuses. On the one
// hand, a function can be reused for different objects. On the other hand, the
// greater flexibility creates more responsibilities for mistakes.

// Arrow functions have no "this"
// Arrow function are special: they don't have their own this. If we reference
// this from such a function, it's taken from the outer "nromal" function.

let user = {
  firstName: "Iya",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};
user.sayHi();

// That's a special feature of arrow functions, it's useful when we actually do
// dot want to have a separate 'this', but rather to take it from the outer context.

// Summary

// - Functions that are stored in object properties are called "methods".
// - Methods allows object to "act" like object.doSomething9).
// - Methods can reference the object as this.

// The value of 'this' is defined at run-time.
// - When a function is declared, it may use 'this', but that 'this' has no value
// until the function is called.
// - A function can be copied between objects.
// - When a function is called in the 'method' syntax: object.method(), the value
// of 'this' during the call is object.
