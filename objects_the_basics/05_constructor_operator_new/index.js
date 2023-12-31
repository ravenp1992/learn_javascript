// Constructor, operator 'new'

// The regular {...} syntax allows us to create one object. But often we need
// to create many similar objects, like multiple users or menu items and so on.
// That can be done using constructor functions and the "new" operator

// CONSTRUCTOR FUNCTION
// Constructor functions technically are regular functions. There are two
// conventiens though:
// 1. They are named with capital lette firstt.
// 2. They should be executed only with "new" operator

// For instance:

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");
// console.log(user.name);
// console.log(user.isAdmin);

// When a function is executed with new, it does the following steps:
// 1. A new empty object is created and assigned to 'this'
// 2. The function body executes. Usually it modifies this, adds new properties to it.
// 3. The value of this is returned.

// In other words, new User(...) does something like:
// function User(name) {
//   // this = {}; // {implicitly}
//   // add properties to this
//   // this.name = name;
//   // this.isAdmin = false;
// }

// Now if we want to create other users, we can call new User("Ann"). Much shorter
// than using literals every time, and also easy to read.

// Tha's the main purpose of constructors - to implement reusable object creation code.

// Let's note once again - technically, any function (except arrow functions, as
// they don't have 'this') can be used as constructor. It can be run with new, and
// it will execute the algorithm above. The 'capital letter first' is a common
// agreement, to make it clear that a function is to be run with new.

// new function() {...}
// If we have many lines of code all about creation of a single complex object,
// we can wrap them in an immediately called constructor function, like this.

// create a function and immediately call it with new

// let user = new (function () {
//   this.name = "John";
//   this.isAdmin = false;
// })();
// console.log(user.name);
// console.log(user.isAdmin);

// This constructor can't be called again, because it is not saved anywhere, just
// created and called. So this trick aims to encapsulate the code that constructs
// the single object, without future reuse.

// CONSTUCTOR MODE TEST: new.target (advanced stuff)
// Inside a function, we can check whether it was called with new or without it,
// using a special new.target property.

// It is undefined for regular calls and equals to function if called with new;

// function User() {
//   console.log(new.target);
// }
// User();
// new User();

// That can be used inside the function to know whether it was called with new,
// "in constructor mode", or without it, "in regular mode".

// We can also make both new and regular calls to do the same, like this:

// function User(name) {
//   if (!new.target) {
//     return new User(name);
//   }

//   this.name = name;
// }

// let john = User("John");
// console.log(john.name);

// This approach is sometimes used in libraries to make the syntax more flexible.
// So that people may call the function with or without new, and it still works.

// Probably not a good thing to use everywhere though, because omitting new makes
// it a bit less obvious what's going on. With 'new' we all know that the object
// is being created.

// RETURN FROM CONSTRUCTORS
// Usually, constructors do not have a return statement. Their tasks is to write
// all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:
// - If 'return' is called with an object, then the object is returned instead of 'this'.
// - If 'return' is called with a primitive, it's ignored.

// In other words, return with an object return that object, in all other cases 'this' is returned.

// For instance, here return overrides 'this' by returning an object:

// function BigUser() {
//   this.name = "John";

//   return { name: "Godzilla" }; // <-- returns this object
// }
// console.log(new BigUser().name);

// And here's an example with an empty return (or we could place a primitive after
// it, doesn't matter):

// function SmallUser() {
//   this.name = "John";
//   return; // <-- returns this
// }
// console.log(new SmallUser().name); // John

// Usually constructors don't have a return statement. Here we mention the special
// behavior with returning objects mainly for the sake of completeness.

// OMITTING PARENTHESES

// let smallUser = new SmallUser(); // <-- no parentheses
// // same as
// let sU = new SmallUser();

// Omitting parentheses here is not considered a "good style", but the syntax
// is permitted by specification

// METHODS IN CONSTRUCTOR FUNCTION
// Using constructttor functions tto create objects gives a greate deal of flexibility.
// The constructor function may have parametters that define how to construct the
// object, and what to put in it.

// Of course, we can add to 'this' not only properties, but methods as well.

// For instance, new User(name) below creates an object with the given name and
// tthe method sayHi:

function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log(`My name is ${this.name}`);
  };
}
let john = new User("John");
john.sayHi();

// SUMARRY

// - Constructor functions or, briefly, constructors, are regular functions,
// but there's a common agreement to name them witth capital letter first.

// - Constructor function should only be called using new. Such a call implies
// a creation of empty 'this' at the sttart and returning the populated one at the
// end.

// We can use constructor functions to make multiple similar objects.

// JavaScript provides constructor functions for many built-in language objects:
// like: Date for dates, Set for sets and others that we plan to study.
