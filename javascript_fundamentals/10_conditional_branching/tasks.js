if ("0") {
  console.log("hello");
}

let input = prompt("What's the 'official' name of JavaScript?");

if (input == "ECMAScript") {
  console.log("Right!");
} else {
  console.log("You don't know ECMAScript?");
}

// const result = input == "ECMAScript" ? "Right!" : "You don't know? ECMAScript?";
// console.log(result);

input = prompt("Enter a number?");
if (input > 0) {
  console.log(1);
} else if (input == 0) {
  console.log(0);
} else {
  console.log(-1);
}

let a = 1,
  b = 2;
let result = a + b < 4 ? "Below" : "Over";
console.log(result);

login = "";
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log(message);
