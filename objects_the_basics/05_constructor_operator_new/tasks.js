// I'll be using bun to run the script instead of the browser.

// TWO FUNTIONS - ONE OBJECT

// Is it possible to create a function A and B so that
// new A() == new B()?

// If it is, then provide an example of their code

// my answer: function A and B return a reference of ref object
// If a function returns an object then new returns it instead of 'this'
let ref = {
  name: "raven",
};

function A() {
  return ref;
}

function B() {
  return ref;
}

let a = new A();
let b = new B();
console.log(a == b);

// CREATE NEW CALCULATOR
// Create a constructor function Calculator that creates objects with 3 methods:

function Calculator() {
  this.read = function () {
    // hardcode the input instead of of using prompt since I will run this code
    // using bun a javascript runtime
    this.a = 5;
    this.b = 10;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());

// CREATE A NEW ACCUMULATTOR

// Create a constructor function Accumulattor(startingValue).
// Object that it creates should:
// - Store the "current value" in the property value. The starting value
// is set to the argument of the constructor startingValue.
// - The read() method should use prompt to read a new number and add it to value.

// In other words, the value property is the sum of all user-entered values with the
// initial value startingValue

// my answer: I'll modify the code to accept argument instead of using prompt

function Accumulator(value) {
  this.value = value;

  this.read = function (value) {
    this.value += value;
  };
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(5); // adds 5 to the current value
accumulator.read(5); // adds 5 to the current value

console.log(accumulator.value); // 11
