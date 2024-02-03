// Rest parameters

// A function can be called with any number of arguments, no matter how it is defined.
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5, 6));

// There will be no error because of "execisve" arguments. But of course in the
// result only the first two will be counter, so the result in the code above is 3.

// The rest of the parameters can be included in the function definition by using
// three dots ... followed by the name of the array that will contain them. The
// dots literally mean "gather the remaining parameters into an array".

function sumAll(...args) {
  let sum = 0;

  for (let arg of args) {
    sum += arg;
  }

  return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));

// We can choose to get the first parameters as variables, and gather only the rest.
// Here the first two arguments go into variables and the rest go into titles array:

function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName);

  console.log(titles[0]);
  console.log(titles[1]);
  console.log(titles.length);
}

showName("Julius", "Caesar", "Consul", "Imperator");

// NOTE: The rest parameters must be at the end
// The rest parameters gather all remaining arguments, so the following does not
// make sense and causes an error:
// T?he ...rest must always be last.

// The "aguments" variable
// There is also a special array-like object named arguments that contains all
// arguments by their index.

function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName("Julius", "Caesar");
showName("Ilya", "Caesar");

// In old times, rest parameters did not exist in the language, and using arguments
// was the only way to get all arguments of the function. And still works,
// But the downside is that although arguments is both array-like and iterable, it's
// not an array. It does not support array methods, so we can't call arguments.map(...)
// Also, it always contains all arguments. We can't capture them partially, like we did
// with rest parameters.

// NOTE: Arrow functions does not have "arguments"
// If we access the argumentts object from an arrow function, it takes them from
// the outer "normal" function.

function f() {
  let showArgs = () => console.log(arguments[0]);
  showArgs();
}
f(1);
