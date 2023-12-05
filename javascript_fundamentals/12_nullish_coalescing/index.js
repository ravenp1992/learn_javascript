// Nullish coalescing operator '??'

// This is a recent addition to the language. Old browsers may need polyfills.

// The nullish coalescing operator is written as two question marks ??.

// As it treats null and undefined similarly, we'll use a special term here,
// For brevity, we'll say that a value is "defined" when it's neither null or
// undefined.

// The result of a ?? b is:
// - if a is defined, tthen a,
// - if a isn't defined, then b.

// In other words, ?? returns the first argument if it's not null/undefined.
// Otherwise, the second one.

// The common use case for ?? is to provide a default value.

let user;
console.log(user ?? "Anonymous"); // Anonymous

user = "John";
console.log(user ?? "Anonymous"); // John

// We can also use a sequence of ?? to select the first value from a list that
// isn't null/undefined.

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

// Comparison with ||

console.log(firstName || lastName || nickName || "Anonymous");

// The important difference between them is that:
// || returns the first truthy value.
// ?? returns the first defined value.

// The precedence of the ?? operator is the same as ||.

// For safety reasons, JavaScript forbids using ?? together with && and || operators
// iunless the precedence is explicitly specified with parentheses

// SUMARRY

// The nullish coalescing operator ?? provides a short way to choose the first
// "defined" value from a list.

// The opeartor ?? has a very low precedence, only a bit higher than ? and =, so
// consider adding parentheses when using it an expression.

// It's forbidden to use it with || or && without explicit parentheses
