// The "switch" statement

// A switch statement can replace multiple if checks.
// it gives a more descriptive way to compare a value with multiple variants

// The syntax
// The switch has one more case blocks and an optional default.

// switch(x) {
//   case 'value1':
//     ...
//     [break]
//   case 'value2':
//     ...
//     [break]
//   default:
//     ...
//     [break]
// }

let a = 2 + 2;
switch (a) {
  case 3:
    console.log("Too small");
    break;
  case 4:
    console.log("Exactly");
    break;
  case 5:
    console.log("Too big");
    break;
  default:
    console.log("I don't know such values");
}

// If there is no break then the execution continues with the next case
// without any checks.
switch (a) {
  case 3:
    console.log("Too small");
  case 4:
    console.log("Exactly");
  case 5:
    console.log("Too big");
  default:
    console.log("I don't know such values");
}

// Any expression can be a switch/case argument
// Both switch and case allow arbitrary expression.

let x = "1";
let y = 0;

switch (+x) {
  case b + 1:
    console.log("This runs, because +a is 1, exactly equals b+1");
    break;
  default:
    console.log("This doesn't run");
}

// Type matters
let args = "";

switch (args) {
  case "0":
  case "1":
    console.log("One or zero");
    break;
  case "2":
    console.log("Two");
    break;
  case 3:
    console.log("Never executes!");
    break;
  default:
    console.log("An unknown value");
}
