// Code blocks
// If a variable is declard inside a code block {...},
// It's only visible inside that block.

{
  let message = "Hello";
  console.log(message);
}
// console.log(message); // Error: message is not defined

// We can use this to isolate a piece of code that does its own taks,
// with variables that belong to it:
{
  let message = "Hello";
  console.log(message);
}
{
  let message = "Goodblye";
  console.log(message);
}

// NOTE: There'd be an error without blocks

// For if, for, while and so on, variables declared in {...} are also
// only visible inside:
if (true) {
  let phrase = "Hello!";
  console.log(phrase);
}
// console.log(phrase); // ERror, no such variable!

for (let i = 0; i < 3; i++) {
  console.log(i);
}
// console.log(i); // Error, no such variable!
// Visually, let i is outside of {...}. But the for construct is special here:
// the variable, declared inside it is considered a part of the block.
