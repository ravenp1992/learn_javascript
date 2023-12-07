// Curly Braces
// Egyptian style with the opening brace on the same line as the corresponding
// keyword
if (condition) {
}

// Line Length
// The maximum line length should be agreed upon at a team-level.
// It's usually 80 or 120 characters.

// Indent
// Horizontal indens: 2 or 4 spaces
// Vertical indents: empty lines for splitting code into logical blocks.

function pow(x, n) {
  let result = 1;
  // Horizontal
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  // Horizontal
  return result;
}

// Semicolons
// A semicolon should be present after each statement, event if it could possibly
// be skipped.

// Nesting Lvels
// Try to avoid nesting code too many levels deep.
for (let i = 0; i < 10; i++) {
  if (cond) {
    // one more nesting level
  }
}
// We can write
for (let i = 0; i < 10; i++) {
  if (!cond) continue;
}

// Function Placement
// Code first, then functions
let elem = createElement();
setHandler(elem);
walkAround();

function createElement() {}

function setHandler() {}

function walkAround() {}
