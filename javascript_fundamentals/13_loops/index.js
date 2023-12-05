// Loops

// Loop are a way to repeat the same code multiple times.

// for...in -> to loop over object properties
// for...of and iterables -> for looping over arrays and iterable objects.

// The "while" loop
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

let x = 3;
while (x) {
  console.log(x);
  x--;
}

// The "do...while" loop
// The loop will first execute the body, then check the condition, and, while
// it's truthy, execute it again and again.

let a = 0;
do {
  console.log(a);
  a++;
} while (a < 3);

// The "for" loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// Skipping parts

// omit begin
let b = 0;
for (; b < 3; b++) {
  console.log(b);
}

// omit step
let c = 0;
for (; c < 3; ) {
  console.log(c++);
}

// omit everything
// infinite loop
// for (;;) {
// }

// Breaking the loop
// let sum = 0;
// while (true) {
//   let value = +prompt("Enter a number", "");

//   if (!value) break;

//   sum += value;
// }

// Continue to the next iteration
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;

  console.log(i);
}

// Note that syntax constructs that are not expressions cannot be used with
// the ternary operator ?. In particular, directives such as break/continue
// aren't allowed here.
// (i > 5) ? console.log(i) : continue; // continue isn't allowed here

// Labels for break/continue
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coord (${i}, ${j})`, "");

    if (!input) break outer;
  }
}
console.log("Done!");

// Labels do not allow us to jump into an arbitrary place in the code.
// A break directive must be inside a code block. Technically, any labelled
// code block will do
label: {
  break label;
}
