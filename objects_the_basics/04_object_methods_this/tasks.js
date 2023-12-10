// Using 'this' in object literal

// Here the function makeUser returns an object.
// What is the result of accessing its ref? Why?

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();
// console.log(user.ref.name); // What's the result? -> undefined

// answer: undefined
// That's because rules that set 'this' do not look at object definition. only
// the moment of call matters.

// Here the value of 'this' inside makeUser() is undefined, because it is called
// as a function, not as a method with 'dot' syntax.

// The value of 'this' is one for the whole function, code blocks and object literals
// do not affect it.

// So ref: this actually takes current this of the function.

// We can rewrite the function and return the same this with undefined value:
// function makeUser() {
//   return this;
// }
// console.log(makeUser().name)

// As you can see the result of console.log(makeUser().name) is the same as the result
// of console.log(user.ref.name) from the previous example.

// Here's the opposite case:
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}
let user = makeUser();
console.log(user.ref().name); // John
// not it works, because user.ref9) is a method. And the value of 'this' is set
// to the object before dot.

// Create a calculator
// Create an object calculator with three methods:
// - read() prompts for two values and saves them as object properties with name
// a and b respectively
// - sum() returns the sum of save values.
// - mul() multiplies saves values and return the result

let calculator = {
  read() {
    this.a = +prompt("Enter a valid number for first value", "0");
    this.b = +prompt("Enter a valid number for second value", "0");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Chaining
// There's a ladder object that allows to go up and down:
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // answer return the object itself from every call
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

// Now, if we need to make several calls in sequence, can do it like this
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.down();
// ladder.showStep();

// Modify the code of up, down and showStep to make the calls chainable, like this
ladder.up().up().down().showStep().down().showStep();
