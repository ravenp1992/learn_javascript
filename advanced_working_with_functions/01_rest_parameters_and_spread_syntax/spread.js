// function max(...params) {
//   let max = 1;
//   for (let param of params) {
//     if (param > max) {
//       max = param;
//     }
//   }

//   return max;
// }

// console.log(max(3, 5, 1));
// Spread syntax

// We've just seen how to get an array from the list of parameters.
// But sometimes we need to do exactly the reverse.
// For instance, there's a built-in function Math.max the returns the greatest
// number from a list:
console.log(Math.max(3, 5, 1));

// Now let's say we have an array [3, 5, 1]. How do we call Math.max with it?
// Passing it "as is" won't work, because Math.max expects a list of numeric
// arguments, not a single array:

// Spread syntax to the rescue! It looks similar to rest parameters, also using...
// but does quite the opposite. When ...arr is used in the function call, it "expands"
// an iterable object arr into the list of arguments.

let arr = [3, 5, 1];
console.log(Math.max(...arr));

// We can also pass multiple iterables with way:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(...arr1, ...arr2));

// We can even combine the spread syntax with normal values:
console.log(Math.max(1, ...arr1, ...arr2, 2));

// In the examples above we used an array to demonstrate the spread syntax, but
// any iterable will do. For instance, here we use the spread syntax to turn the
// string into array of characters

let str = "Hello";
console.log([...str]);

// For this particular task we could also use Array.from, because it converts
// an iterable (like a string) into an array:
console.log(Array.from(str));

// The result is the same [...str].
// But there's a suble difference between Array.from and [...obj]
// Array.from operates on both array-likes and iterables.
// The spread syntax works only with iterables.
// So, for the task of turning something into an array, Array.from tends to be
// more universal.

// Copy an array/object
// REmember when we talked about Object.assign()
// It is possible to do the same thing with the spread syntax.

let arr4 = [1, 2, 3];
let arrCopy = [...arr4]; // spread the array into a list of parameters
// then put the result into a new array

// are the arrays equal?
console.log(arr4 === arrCopy); // false not the same reference

// modifying the initial array does not modify the copy
arr4.push(4);
console.log(arr4);
console.log(arrCopy);

// Note that is possible to do the same thing to make a copy of an object:
let ob1 = { a: 1, b: 2, c: 3 };
let objCopy = { ...ob1 };

// do the objects have the same contents?
console.log(JSON.stringify(ob1) === JSON.stringify(objCopy));

// are the object equal?
console.log(ob1 === objCopy);

// Modifying our initial object does not modify the copy:
ob1.d = 4;
console.log(JSON.stringify(ob1));
console.log(JSON.stringify(objCopy));
