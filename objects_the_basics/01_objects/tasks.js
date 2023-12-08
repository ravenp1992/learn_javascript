// Write the code, one line for each action:
// 1. Create an empty object user.
// 2. Add the property name with the value John
// 3. Add the propertty surname with the value Smith.
// 4. Change the value of the name to Pete.
// 5. Remove the propety name from the object.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

// Write a function isEmpty(obj) which returns true if the object has no properties,
// false otherwise.

/**
 * Return false if object has no properties
 *
 * @param {object} object The object to check for properties
 * @return {boolean} Return a boolean value
 */
function isEmpty(object) {
  // my solution
  // let propCount = 0;

  // for (let prop in object) {
  //   propCount++;
  // }

  // return propCount ? false : true;

  // better way
  for (let key in object) {
    // if the loop has started, there is a property
    return false;
  }

  return true;
}

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

// Sum object properties
// Write the code to summ all salaries and store in the variable sum. Should be 390
// If salaries is empty, then the result must be 0.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

// Multiple numeric property values by 2
// Please note that multipleNumeric does not need to return anything. It should
// modify the object in-lace.
// P.S. Use typeof to check for a number here.

/**
 * Multiple all numeric properties value by 2
 *
 * @param {object} object
 * @return void
 */
function multiplyNumeric(object) {
  for (let prop in object) {
    if (typeof object[prop] != "number") continue;

    object[prop] *= 2;
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

console.log(menu);
