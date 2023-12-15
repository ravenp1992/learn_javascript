// OBJECT TO PRIMITIVE CONVERSION

// What happens when object are added obj1 + obj2, subtracted obj1 - objc2 or
// printed using alert(obj)?

// JavaScript doesn't allow you to customize how operators work on objects. Unlike
// some other programming languages, such as Ruby or C++, we can't implement a
// special object method to handle addition (or other operators).

// In case of such operations, objects are auto-converted to primitives, and then
// the operation is carried out over these primitives and results in a primitive value.

// That's an important limitation: the result of obj1 + obj2 (or another math operation)
// can't be another object!.

// E.g. we can't make objects representing vectors or matrices (or archievements or
// whatever), add them and expect "summed" object as the result. Such architectural
// feat are automatically off the board.

// CONVERSION RULES

// 1. There's no conversion to boolean. All objects are true in boolean context,
// as simple as that. There exist only numeric and string conversions.

// 2. The numeric conversion happens when we subtract objects or apply mathematical
// functions. For instance, Date objects can be subtracted, and the rsult of date1 - date2
// is the time difference between two dates.

// 3. As for the string conversion - it usually happens when we output an object
// with alert(obj) and in similar contexts.

// We can implement string and numeric conversion by ourselves, using special
// object methods.

// HINTS

// How does JavaScript decide which conversion to apply?

// There are three variants of type conversion, that happen in various situations.
// They're called "hints", as described in the specification:

// "STRING"
// For an object-to-string conversion, when we're doing an operation on an object
// that expects a string, like alert:

// output
// alert(obj);

// using object as property key
// anotherObj[obj] = 123;

// "NUMBER"
// For an object-to-number conversion, like when we're doing maths:

// explicit conversion
// let num = Number(obj);

// maths (except binary plsu)
// let n = +obj; // unary plus
// let delta = date1 - date2;

// less/greater comparison
// let greater = user1 > user2;

// "DEFAULT"
// Occurs in rare cases when the operator is "not sure" what type to expect.

// For instance, binary plus + can work both with strings (concatenates them)
// and number (adds them). So if a binary plus gets an object as an argument, it
// uses the "default" hint to convert it.

// Also, if an object is compared using == with a string, number or  a symbol,
// It is also unclear which conversion should be done, so the "default" hint is
// used.

// binary plus uses the "default" hint
// let total = obj1 + obj2;

// obj == number uses the "default" hint
// if (user == 1) {...}

// The greater and less comparision operators, such as < >, can work with both
// strings and numbers too. Still, they use the "number" hint, not "default".
// That's for historical reasons.

// In practice though, things are a bit simpler.
// All built-in objects except for on case (Date object) implement "default"
// conversion the same way as "number". And we probably should do the same.

// Still, it's important to know about all 3 hints, soon we'll see why.

// To do the conversion, JavaScript tries to find and call three object methods:

// 1. Call obj[Symbol.toPrimitive](hint) - the method with the symbolic key
// Symbol.toPrimitive (system symbol), if such method exists.

// 2. Otherwise if hint is "string"
// try calling obj.toString() or obj.valueOf(), whatever exists.

// 3. Otherwise if hint is "number" or "default"
// try calling obj.valueOf() or obj.toString(), whatever exists.

// Symbol.toPrimitive
// Let's start from the first method. There's a built-in symbol named Symbol.toPrimitive
// that should be used to name the conversion method, like this:

// obj[Symbol.toPrimitive] = function (hint) {
//   // here goes the code to convert this object to a primitive
//   // it must return a primitive value
//   // hint = one of "string", "number", "default"
// };

// If the method Symbol.toPrimitive exists, it's used for all hints, and no more
// methods are needed.
// For instance, here user object implements it:

// let user = {
//   name: "John",
//   money: 1000,
//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   },
// };

// // conversion demo:
// console.log(user); // hint: string -> {name: "John"}
// console.log(+user); // hint: number -> 1000
// console.log(user + 500); // hint: default -> 1500

// As we can see from the code, user becomes a self-descriptive string or a money
// amount, depending on the conversion. The single method user[Symbol.toPrimitive]
// handles all conersion cases.

// toString/valueOf
// If there's no Symbol.toPrimitive then JavaScript tries to find methods toString
// and valueOf:

// - For the "string" hint: call toString method, and if it doesn't exist or if
// it returns an object instead of a primitive value, then call valueOf (so toString
// has the priority for string conversions).

// - For other hints: call valueOf, and if it doesn't exist or if it returns an object
// instead of primitive value, then call toString(so valueOf has the priority for maths).

// Methods toString and valueOf comes from ancient times. They are not symbols
// (symbols did not exist that long ago), but rather "regular" string-named methods.
// They provide an alternative "old-style" way to implement the conversion.

// These methods must return a primitive value. If toString or valueOf returns an
// object, then it's ignored (same as if there were no method).

// By default, a plain object has following toSTring and valueOf methods:
// - The toString method returns a string "[object Object]"
// - The valueOf method return the object itself.

// Here's the demo:
let user1 = { name: "John" };

console.log(user1); // [object Object]
console.log(user1.valueOf() === user1); // true

// So if we try to use an object as a string. like in an alert or so, then by
// default we see [object Object].

// The default valueOf is mentioned here only for the sake of completeness, to
// avoid any confusion. As you can see, it returns the object itself, and so
// ignored. Don't ask me why, that's for historical reasons. So we can assume
// it doesn't exists.

// Let's implement these methods to customize the conversion.

// For instance, here user does the same as above using a combination of toString
// and valueOf instead of Symbol.toPrimitive:

let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  },
};
console.log(user); // toString -> {name: "John"}
console.log(+user); // valueOf -> 1000
console.log(user + 500); // valueOf -> 1500

// As we can see, the behavior is the same as the previous example with Symbol.toPrimitive

// Often we want a single "catch-all" plac to handle all primitive conversions. In this
// case, we can implement toString only, like this:

let user2 = {
  name: "John",
  toString() {
    return this.name;
  },
};
console.log(user); // toString -> John
console.log(user + 500); // toString -> John500

// In the absence of Symbol.toPrimitive and valueOf, toString will handle all
// primitive conversions.

// A CONVERSION CAN RETURN ANY PRIMITIVE TYPE
// The imporant thing to know about all primitive-conversion methods is that
// they do not necessarily return the "hinted" primitive.

// There is no control whether toString returns exactly a string, or whether
// Symbol.toPrimitive method returns a number for the hint "number".

// The only mandatory thing: these methtods must return a primitive, not an object.

// HISTORICAL NOTES:
// For historical reasons, if toString or valueOf returns an object, there's no error,
// but such value is ignored (like if the method didn't exist). That's because in
// ancient times there was no good "error" concept in JavaScript.

// In contrast, Symbol.toPrimitive is stricter, it must return a primitive, otherwise
// there will be an error.

// FURHTER CONVERSIONS
// As we know already, many operators and functions perform type conersion, e.g
// multiplication * converts operands to numbers.

// If we pass an object as an argument, then there are two stages of calculations:
// 1. The object is converted to a primitive (using the rules described above).
// 2. If necessary for further calculations, the resulting primitive is also converted.

// For insttance:
let obj = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return "2";
  },
};
console.log(obj * 2); // 4, object converted to primitive "2", then multiplication made it number
// 1. The multiplicatiton obj * 2 first converts the object to primitive (that's string "2").
// 2. Then "2" * 2 becomes 2 * 2 (the string is converted to number).

// Binary plus will concatenate strings in the same situation, as it gladly accepts
// a string:

let obj1 = {
  toString() {
    return "2";
  },
};
console.log(obj + 2); // 22 ("2" + 2), conversion to primitive returned a string => concatenation

// SUMARRY
// The object-to-primitive conversion is called automatically by many built-in functions
// and operators that expected a primitive as a value.

// There are 3 types (hint) of it:
// - "string" (for alert and other operations that need a string)
// - "number" (for math)
// - "default" (few operator, usually objects implement it the samw way as "number")

// The specification describes explicitly which operator uses which hint.

// The conversion algorithm is:
// 1. Call obj[Symbol.toPrimitive](hint) if the method exists,
// 2. Otherwise if hint is "string"
// - try calling obj.toString() or obj.valueOf() whatever exists.
// 3. Otherwise if hint is "number" or "default"
// - try calling obj.valueOf() or obj.toString(), whatever exists.

// All these methods must return a primitive to work (if defined).

// In practice, it's often enough to iplement only obj.toString() as "catch-call"
// method for string conversion that should return a "human-readable" representation
// of an object, for logging or debugging purposes.
