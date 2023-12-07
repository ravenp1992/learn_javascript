// Function expressions

// In JavaScript, a function is not a "magical language structure", but a special
// kind of value.
// The syntax that we used before is called a Function Declaration:
function sayHi() {
  console.log("Hello");
}

// There is another syntax for creating a function that is called a Fucntion Expression.
// It allows us to create a new function in the middle of any expression.
let sayHi = function () {
  console.log("Hello");
};

// Function is a value
// Let's reiterate: no mattter how the function is created, a function is a value.

function sayHello() {
  console.log("Hello");
}

console.log(sayHello);
// Please note that the last line does not run the function, because there are no
// parentheses after sayHello.

// In JavaScript, a function is a value, so we can deal with it as a value. The
// code above shows it string representation, which is the source code.

// We can copy a function to another variable:
function func1() {
  console.log("func1");
}
let func = func1; // copy
func(); // func1 // run the copy
func1(); // func1 this still works too

// Callback functions
// Let's look at more example of passing functions as values and using function
// expressions.

// We'll write a function ask(question, yes, no) with thre parameters:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  console.log("You agreed.");
}

function showCancel() {
  console.log("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);

// The arguments showOk and showCancel of ask are called callback functions or
// just callbacks.

// The idea is that we pass a function and expect it to be "called back" later
// if necesarry. In our case, showOK becomes the callback for "yes" answer,
// and showCancel for "no" answer

// We can use Function Expression to write an equivalent, shorter function:
function ask2(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask2(
  "Do you agree?",
  function () {
    console.log("You agreed.");
  },
  function () {
    console.log("You canceled the execution.");
  },
);
// Here, functions are declared right inside the ask(...) call. They have no name,
// and so are called anonymous. Such functions are not accessible outside of ask
// (because they are not assigned to variables), but that's just what we want here.

// A function is a value representing an "action"
// Regular values like strings or numbers represent the data.
// A function can be preceived as an action.
// We can pass it between variables and run when we want.

// Function Expression vs Function Declaration
// Function Declaration: a function, declared as a separate statement
// Function Expression: a function, created inside an expression or inside another
// syntax construct.

// The more sublte difference is when a function is created by the JavaScript engine.

// A function expression is created when the execution reaches it and is usable only
// form that moment.

// A function declaration can be called earlier that it is defined.
// That's due to interal algorithms. When JavaScript prepares to run the script,
// it first looks for global function declaration in it and creates the functions.
// We can think of it as an "initialization stage".

// In strict mode, when a Function Declaration is within a code block, it's visible
// everywhere insode that block. But not outside of it.
let age = 16;

if (age < 18) {
  welcome();

  function welcome() {
    console.log("Hello!");
  }

  welcome();
} else {
  function welcome() {
    console.log("Greetings!");
  }
}

welcome(); // ERror: welcome is not defined

// When to choose Function Declaration versus Function Expression?
// As a rule of thumb, when we need to declare a function, the first thing to
// consider is Function Declaration syntax. It gives more freedom in how to
// orgnaize our code, because we can call such function before they are declared

// But if a Function Declaration does not suit us for some reason, or we need a
// conditional declaration (we've just seen an example), then Function Expression
// should be used.
