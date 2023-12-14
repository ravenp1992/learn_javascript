// SYMBOL TYPE

// By specification, only two primitive types may server as object property keys:
// - string type, or
// - symbol type.

// Otherwise, if one uses another type, such as number, it's autconverted to string.
// So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].

// Until now we've been using only strings.

// SYMBOLS
// A "symbol" represents a unique indentifier.
// A value of this type can be created using Symbol();

// let id = Symbol();

// Upon creation, we can give symbols a description (also called a symbol name),
// mostly useful for debugging purposes:

// let id = Symbol("id"); // id is a symbol with the description "id"

// Symbols are guaranteed to be unique. Even if we create many symbols with exactly
// the same description, they are diffent values. The description is just a label
// that doesn't affect anything.

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1 == id2); // false

// If you are familiar with Ruby or another language that also has some sort of
// "symbols" - please don't be misguided. JavaScript symbols are different.

// SYMBOLS DON'T AUTO-CEONVERT TO A STRING
// Most values in JavaScript support implicit conversion to a string. For instance,
// we can alert almost any value, and it will work. Symbols are special. They don't
// auto-convert.

// let id3 = Symbol("id");
// console.log(id3);

// That's a "language guard" againt messing up, because strings and symbols are
// fundamentally different and should not accidentally convert one into another.

// If we really want to show a symbol, we need to explicitly call .toString() on it,
// like here:

// let id4 = Symbol("id");
// console.log(id4.toString()); // Symbol(id), not it works

// Or get symbol.description property to show the description only:
// console.log(id4.description); // id

// "HIDDEN" PROPERTIES
// Symbols allows us to create "hidden" properties of an object, that no other
// part of code can accidentally access or overwite.

// Fot instance, if we're working with user objects, that belong to a third-party
// code. We'd like to add identifiers to them.

// let user = {
//   name: "John",
// };

// let id = Symbol("id");

// user[id] = 1;

// console.log(user[id]); // we can access the data using the symbol as the key

// What's the benefit of using Symbol("id") over a string "id" ?

// As user objects belong to another codebase, it's unsafe to add fields to them,
// since we might affect pre-defined behavior in that other codebase. However,
// symbols cannot be accessed accidentally. The third-party code won't be aware of
// newly defined symbols, so it's safe to add symbols to the user objects.

// Also, imagine that another script wants to have its own identifier inside user,
// for its own purposes.

// Then that script can create own Symbol("id"), like this:
// let id = Symbol("id");
// user[id] = "Their id value";

// There will be no conflict between our and their identifiers, because symbols
// are always different, even if they have the same name.

// ...But if we used a string "id" instead of a symbol for the same purpose, the
// there would be a conflict:

// let user = { name: "John" };

// // Our script uses "id" property
// user.id = "Our id value";

// // ...Another script also wants "id" for its purposes...
// user.id = "Their id value";
// // Boom! overwritten by another script!

// SYMBOLS IN AN OBJECT LITERAL
// If we want to use a symbol in an object literal {...}, we need square brackets
// around it.

// let id = Symbol("id");
// let user = {
//   name: "John",
//   [id]: 123, // not "id": 123
// };

// That's because we need the value from the variable id as the key, not the string
// "id".

// SYMBOLS ARE SKIPPED BY FOR...IN

// Symbolic properties do not participate in for..in loop.

// let id = Symbol("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123,
// };

// for (let key in user) console.log(key);

// the direct access by the symbol works
// console.log(`Direct: ${user[id]}`); // Direct: 123

// Object.keys(user) also ignores them. That's a part of the general "hiding symbolic
// properties" principle. If another script or a library loops over our object,
// it won't unexpectedly access a symbolic property.

// In constrasts, Object.assign copies both string and symbol properties:
// let id = Symbol("id");
// let user = {
//   [id]: 123,
// };
// let clone = Object.assign({}, user);
// console.log(clone[id]); // 123

// There's no paradox here. That's by design. The idea is that wen we clone object
// or merge objects, we usually want all propertties to be copid (including symbols like id).

// GLOBAL SYMBOLS
// As we've seen, usually all symbols are different, event if they have the same name.
// But sometimes we want same-named symbols to be same entities. For instance, different
// parts of our application want to access symbol "id" meaning exactly the same
// property.

// To achieve that, there exists a global symbol registry. We can create symbols
// in it and access them later, and it guarantees that repeated accesses by the
// same name retturn exactly the same symbol.

// In order to read (create if absent) a symbol from the registry, use Symbol.for(key)

// That call checks the global registry, and if there's a symbol describe as key, then
// returns it, otherwise create a new symbol Symbol(key) and stores it in the global
// symbol registry by the given key.

// read from the global registry
let id = Symbol.for("id"); // if the symbol did nott exist, it is created

// read it again (maybe from another part of the cod)
let idAgain = Symbol.for("id");

// the same symbol
console.log(id === idAgain);

// Symbols inside the registry are called global symbols. If we want an application-wide
// symbols, accessible everywhere in the code - that's what they are for.

// Symbol.keyFor
// We have seen that for global symbols, Symbol.for(key) returns a symbol by name.
// To do the opposite - return a name by global symbol - we can use: Symbol.keyFor(sym):

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

// The Symbol.keyFor internally uses the global symbol registry to look up the key
// for the symbol. So it doesn't work for non-global symbols. If the symbol is not
// globa, it won't be able tto find it and returns undefined.

// That said, all symbols have the description property.
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); // name, global symbol
console.log(Symbol.keyFor(localSymbol)); // undefined, not global

console.log(localSymbol.description); // name

// SYSTEM SYMBOLS
// There exists many "system" symbols that JavaScript uses internally, and we can
// use them to fine-tune various aspects of our objects.

// They are listed in the specification in the Well-known symbols table:
// Symbol.hasIsntance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive
// ...and so on.

// SUMMARY
// Symbol is a primitive type for unique identifiers.

// Symbols are created with Symbol() call with an optional description (name).

// Symbols are always different value, even if they have the same name. If we want
// same-named symbols to be equal, then we should use the global register: Symbol.for(key)
// return (create if needed) a global symbol with key as the name. Multiple calls of
// Symbol.for with the same key return exactly the same symbol.

// Symbols have two main use cases:

// 1. "Hidden" object properties
// If we want to add property into an object that "belongs" to another script or a
// library, we can create a symbol and use it as a property key. A symbolic property
// dot not appead in for..in, so it won't be accidentally processed together with
// other properties. Also it won't be accessed directly, because another script does
// not have our symbol. So the property will be proteted from accidental use or ovewrite.

// So we can "covertly" hide something into objects that we need, but others should
// not see, using symbolic properties.

// 2. There are many system symbols used by JavaScript which are accessible as
// Symbol.*. We can use them to alter some built-in behaviors. For instance, later
// in the tutorial we'll use Symbol.iterator for iterables, Symbol.toPrimitive to
// setup object-to-primitive conversion and so on.

// Technically, symbols are not 100% hidden. There is a built-in method
// Object.getOwnPropertySymbols(obj) that allows us to get all symbols. Also there
// is a method name Reflect.ownKey(obj) that returns all keys of an object including
// symbolic ones. But most libraries, built-in functions and syntax construct don't use
// the methods.
