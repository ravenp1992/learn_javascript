// Comparisons

// All comparison operators return a boolean value:
// true -> means "yes", "correct" or "the truth".
// false -> means "no", "wrong" or "not the truth".

// String comparison
console.log("Z" > "A");
console.log("Glow" > "Glee");
console.log("Bee" > "Be");

// The algorithm to compare two strings is simple:
// 1. Compare the first character of both strings.
// 2. If the first character from the first string is greater (or less) than the
// other string's, then the first string is greater (or less) than the second.
// 3. Otherwise, if both string's first character are the same, compare the
// second characters the same way.
// 4. Repeat until the end of either strings.
// 5. If both strings end at the same length, then they are equal. otherwise,
// the longer string is greater.

// Comparison of different types
// When comparing values of different types, JavaScript converts the values to
// numbers.
console.log("2" > 1); // true
console.log("01" == 1); // true

// For boolean values, true becomes 1 and false becomes 0.
console.log(true == 1); // true
console.log(false == 0); // true

// Strict equality

// A regular equality check == has a problem. It cannot diffrentiate 0 from false:
console.log(0 == false); // true
// The same thing happens with an empty string;
console.log("" == false); // true

// A strict equality operator === checks the equality without type conversion.
// In other words, if a and b are of different types, then a === b immediately
// return false without an attempt to convert them.
console.log(0 === false); // false, because the types are different

// Comparision with null and undefined
// There's non-intuitive behavior when null or undefined are compared to other
// values.

// For a strict equality check ===
// These values are different, because each of them is a differentt type.
console.log(null === undefined); // false

// For non-strict check ==
// There's a special rule. These two are a "sweet couple": they equal each other
// (in the sense of ==), but not any other value.
console.log(null == undefined); // true

// Strange result: null vs 0
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Equality check == and comparision > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// On the other hand, the equality check == for undefined and null is defined such that
// without any conversions, they equal each other and don't equal anything else.

// An incomparable undefined
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
// The value undefined shouldn't be compared to other values:

// We get these results because:
// 1. Comparison return false because undefined gets converted to NaN and NaN is
// a special numeric value which returns false for all comparisons.
// 2. The equality check return false because undefined only equals null, undefined
// and no other value.
