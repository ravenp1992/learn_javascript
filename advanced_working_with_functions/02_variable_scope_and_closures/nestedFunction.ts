// Nested functions
// A function is called "nested" when it is created insode onother function.
// It is easily possible to do this with JavaScript.
// We can use it to orgnaize our code, like this:

function sayHiBye(firstName: string, lastName: string) {
  function getFullName(): string {
    return firstName + " " + lastName;
  }

  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}
sayHiBye("Raven", "Paragas");

// Here the nested function getFullName() is made for convenience. It can access
// the outer variables and so can return the full name. Nested functions are quite
// common in JavaScript.

// What's much more interesting, a nested function can be returned; either as a property
// of a new object or as a result by itself. It can be used somewhere else. No matter
// where, it still access to the same outer variables.

// Below, makeCounter creates the "counter" function the returns the next number
// on each invocation:
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Despite being simple, slightly modified variants of that code have practical
// uses, for isntance, as a random number generator to generate random values for
// automated tests.

// Lexical Environment
// NOTE: Here be dragons!
// The in-depth technical explanation lies ahead.
// As far as I'd like to avoid low-level language details, any understanding without
// them would be lacking and incomplete, so get ready.

// STEP 1. VARIABLES
// In JavaScript, every running function, code block {...}, and the script as a
// whole have an internal (hidden), associated object known as the Lexical Environment.

// The Lexical Environment object consists of two parts:
// 1. Environment Record - an object that stores all local variables as its properties
// (and some other information like the value of this).
// 2. A reference to the outer lexical environment, the one associated with the outer
// code.

// A "variable" is just a property of the special internal object, Environment Record.
// To get or change a variable means to get or change a property of that object.

// In this simple code without functions, there is only one Lexical Environment
let phrase = "Hello"; // Environment Record {phrase: "Hello"} outher reference = null

// This is the so called global Lexical Environment, associated with the whole script
// On the comment above, the rectangle means Environment Record (variable store) and
// the arrow mean the outer reference. The global Lexical Environment has no outer
// reference, that's why the arrow points to null.

// As the code start executing and goes on, the Lexical Environment changes.

// Here's a little bit longer code:

// execution start ---- [pharse: <unitialized>] ---> outer = null
// let phrase: -------- [phrase: undefined]
// phrase = "Hello" --- [phrase: "Hello"]
// phrase = "Hello" --- [phrase: "Bye"]

// Rectangles on the right-hand side demonstrate how the global Lexical Environment
// changes during the execution:

// 1. When the script starts, the Lexical Environment is pre-populated with all
// declared variables.
//    - Initially, there are in the "Uninitialized" state. That's a special internal
//      state, it means the engine knows about the variable, but it cannot be reference
//      until it has been declared with let. It's almost the same as if the variable
//      didn't exist.
// 2. Then let phrase definition appears. There's no assignment yet, so its value is
// undefined. We can use the variable from this point forward.
// 3. phrase is assigned a value.
// 4. phrase changes the value.

// Everything looks simple for now, irght?
// - A variable is a propety of a special internal object, associated with the
// currently executing block/function/script.
// - Working with variables is actually working with the properties of that object.

// Note: Lexical Environment is a specification object
// "Lexical Environment" is a specification object: it only exists "theoretically"
// in the language specification to describe how things work. We can't get this
// object in our code and manipulate it directly.
// JavaScript engines also may optimize it, discard variables that are unused to
// save memory and perform other internal tricks, as long as the behavior remains
// as described.

// STEP 2. FUNCTION DECLARATION
// A function is also a value, like a variable.
// The difference is that a Function Declaration is instantlly fully initialized.
// When a Lexical Environment is created, a Function Declaration immediately becomes
// a ready-to-use funciton (unlike let, that is unusable till the declartion).
// That's why we can use a function, declared as Function Declaration, even before
// the declartion itself.

// Naturally, this behavior only applies to Function Declarations, not Function
// Expressions where we assign a function to a variable, such as let say = function(name)...

// STEP 3. INNER AND OUTER LEXICAL ENVIRONMENT
// When a function runs, at the beginning of the call, a new Lexical Environment
// is created automatically to store local variables and parameters of the call.

// For instance, for say("John"), it looks like this

let phrase1 = "Raven";

function say(name: string): void {
  console.log(`${phrase1} ${name}`);
}

// During the function call we have two Lexical Environments: the inner one (for the function)
// and the outer one (global):
// - The inner Lexical Environment corresponds to the current execution of say. It has
// a single property name, the function argument. We called say("John"), so the  value of
// name is "John".
// - The outer Lexical Environment is the global Lexical Environment. It has the phrase
// variable and the function itself.

// - For the name variable, the console inside say finds it immediately in the inner
// Lexical Environment
// - When it wants to acces phrase, then there is no phrase locally, so it follows the
// reference to the outer Lexical Environment and finds it there.

// Note: Closue
// There is general programming term "closure", that developers generally should know.

// A closure is a function that remembers its outer variable and can access them. In some
// languages, that's not possible, or a function should be written in a special way
// to make it happen. But as explained above, in JavaScript, all functions are naturally
// closures (there is only one exception, to be covered in The "new Function" syntax).

// That is: they automatically remember where they were created using a hidden [Environment]
// property, and then their code can access outer variables.

// When on an interiview, a frontend developer gets a question about "what's a closue?",
// a valid answer would be a definition of the closure and explanation that all funciton
// in JavaScript are closures, and maybe a frew more words about technical details: the
// [[Environment]] property and how Lexical Environmentt work.
