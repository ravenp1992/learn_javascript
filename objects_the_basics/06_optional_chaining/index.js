// Optional chaining '?.'

// Note:
// This is a recent addition to the language. Old browser may need polyfills.

// The optional chaining ?. is a safe way to access nested object properties, even
// if an intermediate property doesn't exists.

// THE "NON-EXISTING PROPERTY" PROBLEM
// If you've just started to read the tutorial and learn JavaScript, maybe the
// problem hasn't touched you yet, but it's quite common.

// As an example, let's ay we have user objects that hold the information about
// our users.

// Most of our users have addresses in user.address property, with the street
// user.address.streeet, but some did not provide them.

// In such case, when we attemp to get user.address.street, and the user happens
// to be without an address, we get an error:
// let user = {};
// console.log(user.address.street); // Error!

// OPTIONAL CHAINING
// The optional chaing '?.' stops the evaluation if the value before ?. is undefined
// or null and returns undefined.

// Here's the safe way to access user.address.treet using ?.
// console.log(user?.address?.stree); // undefined

// Reading the address with user?.address works even if user object doesn't exists:
// user = null;
// console.log(user?.address); // undefined
// console.log(user?.address.street); // undefined

// NOTE: The ?. syntax makes optional the value before it, but not any further

// DON'T OVERUSE THE OPTIONAL CHAINING
// We should use ?. only where it's ok that something doesn't exist.

// For example, if according to our code logic user object must exist, but address
// is optional, then we should write user.address?.street, but not user?.address?.street

// Then, if user happens to be undefined, we'll see a programming error about it
// and fix it. Otherwise, if we overuse ?., coding errors can be silenced where not
// appropriate, and become more difficult to debug.

// THE VARIABLE BEFORE ?. MUST BE DECLARED
// If there's no variable users at all, then user?.anything triggers on error:
// The variable must be declared (e.g let/const/var user or a function parameter).
// The optional chaining works only for declared variables.

// SHORT-CIRCUITING
// As it was said before, the ?. immediately stops ("shot-circuits") the evaluation
// if the left part doesn't exists. So, if there are any further function calls
// or operations to the right of ?., they won't be made.

let user = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
console.log(x); // 0, value not incremented

// OTHER VARIANTS: ?.(), ?.[]
// The optional chaining ?. is not an operator, but a special syntax construct,
// that also works with functions and square brackets.

let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no sucm method)

// Here, in both lines we first use the dot (userAdmin.admin) to get admin property,
// because we assume that the user object exists, so it's safe read from it.

// Then ?.() checks the left part: if the admin function exists, then it runs (
// that's so far userAdmin). Otherwise (for userGuest) the evaluation stops without
// errors.

// The ?.[] syntax also works, if we'd like to use brackets [] to access properties
// instead of dot ..Similiar to previous cases, it allows to safely read a property
// from an object that may not exist.

let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

// Also we can use ?. with delete
delete user?.name; // delete user.name if user exists

// WE CAN USE ?. FOR SAFE READING AND DELETING, BUT NOT WRITING
// The optional chaining ?. has no use on the left side of an assignment.

let person = null;

person?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"

// SUMMARY
// The optional chaining ?. syntax has three forms:

// 1. obj?.prop - returns obj.prop if obj exists, otherwise undefined.
// 2. obj?.[prop] - return obj[prop] if obj exists, otherwise undefined.
// 3. obj.method?.() - calls obj.method() if obj.method exists, otherwise returns undefined.
