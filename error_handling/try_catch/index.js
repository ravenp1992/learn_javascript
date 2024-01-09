// try {
//   console.log("Start of try runs");
//   console.log("End of try runs");
// } catch (err) {
//   console.log("Catch is ignored, because there are no errors");
// }

// try {
//   console.log("Start of try runs");
//   lalala;
//   console.log("End of try runs");
// } catch (err) {
//   console.log("Error has occured");
// }

// NOTE:
// try..catch ony works for runtime errors

// NOTE:
// try..catch works synchronously
// If an exception happens in "scheduled" code, like in setTimeout, then
// try..catch won't catch.
// That's because the function itself is executed later, when the engine has
// left try..catch construct.

// try {
//   setTimeout(function () {
//     noSuchVariable;
//   }, 1000);
// } catch (err) {
//   console.log("won't work");
// }

// To catch an exepction inside a schedule function, try..catch must be inside
// that functions.

// setTimeout(function () {
//   try {
//     noSuchVariable;
//   } catch {
//     console.log("error is caught here!");
//   }
// }, 1000);

// Error object
// When an error occurs, JavaScript generates an object containing details about it.
// The object is then passed as an argument to catch:

try {
  // ...
} catch (err) {
  // ...
}
// For all built-in errors, the error object has two main properties:

// *name - Error name. For instance, for an undefined varaible that's "ReferenceError"
// *message - Textual message about error details.

// There are other non-standard properties available in most environemtns. One
// of most widely used and supported is:

// *stack - Current call stack: a string with information about the sequence of
// nested calls that led to the error. Used for debugging purposes.

// try {
//   lalala;
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);
// }

// Optional "catch" binding
// NOTED: A recent addtion
// This is a recend addition to the language. Old browser may need polyfills.

// If we don't need error details, catch may omit it:

// try {
//   // TODO
// } catch {
//   // TODO
// }

// Using "try..catch"

// let json = "{ bad json }";
// try {
//   let user = JSON.parse(json);
//   console.log(user.name);
// } catch (err) {
//   console.log(
//     "Our apologies, the data has errors, we'll try to request it one more time",
//   );
//   console.log(err.name);
//   console.log(err.message);
// }

// Throwing our own errors
// What if json is syntactically correct, but doesn't have a required name property?
// Like this:

// let json = '{"age": 30}';

// try {
//   let user = JSON.parse(json);
//   console.log(user.name);
// } catch (err) {
//   console.log("Doesn't execute");
// }

// "Throw" operator
// The throw operator generates an error.

// Technically, we can use anything as an error object. That may be even primitive,
// like number or a string, but it's better to use objects, preferably with name
// and message properties (to stay somewhat compatible with built-in errors).

// JavaScript has many built-in constructors for standard errors: Error, SyntaxError,
// ReferenceError, TypeError and others.

// For built-in errors (not for any objects, just for errors), the name property
// is exactly the name of the constructor. And message is taken from the argument.

// let error = new Error("Thing happen o_O");
// console.log(error.name);
// console.log(error.message);

// try {
//   JSON.parse("{ bad json o_O}");
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// }

// As we can see, that's a SyntaxError.
// And in our case, the absence of name is an error, as users must have a name.

let json = '{"age": 30}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  console.log(user.name);
} catch (err) {
  console.log("JSON error: " + err.message);
}
