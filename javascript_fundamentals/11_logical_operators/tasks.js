console.log(null || 2 || undefined); // 2

alert(alert(1) || 2 || alert(3)); // 1, 2
// The call to alert doest not return a value. Or, in other words, it returns
// undefined.

// 1. The first OR || evaluates it left operand alert(1). That shows the first
// message 1.
// 2. The alert returns undefined, so OR goes on to the second operand searching
// for a truthy value.
// 3. The second operand 2 is truthy, so the execution is halted, 2 is returned
// and then shown by the outer alert.

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); //  1 undefined

alert(null || (2 && 3) || 4); // 3

// The precedence of AND && is higher than ||, so it executes first.

let age = 24;
if (age >= 14 && age <= 90) {
  console.log("in range");
}

if (!(age >= 14 && age <= 90)) {
  console.log("not in range");
}

if (age < 14 || age > 90) {
  console.log("not in range");
}

const username = prompt("Enter username:", "");

if (username == "Admin") {
  const password = prompt("", "");

  if (password == "TheMaster") {
    alert("Welcome!");
  } else if (password == "") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else {
  alert("I don't know you.");
}
