// Can i add a string property?

// Consider the following code:

// What do you think, will it work? what will be shown?
let str = "Hello";
str.test = 5;
console.log(str.test);

// Depending on whether you have use strict or not, the result maybe:
//1. undefined (no strict mode)
//2. An error (strict mode)

// Why? Let's replay what's happening
// 1. When a property of str is accessed, a "wrapper object" is created
// 2. In strict mode, writing into it is an error
// 3. Otherwise, the operation with the propety is carried on, the object gets
// the test property, but after that the "wrapper object" disappears, so in the
// last line str has no trace of the property.

// This example cleary shows that primitives are not objects.
// They can't store additional data
