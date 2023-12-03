// Working with variable
// const name = "John";
// let admin;
// admin = name;
// alert(admin);

// Giving the right name
// let earth;
// let currentVisitor;

// Uppercase const?
const BIRTHDAY = "12.29.1992";
const age = someCode(BIRTHDAY);
alert(age);

/**
  *@param {string} birthday 
  @returns {number}
*/
function someCode(birthday) {
  const currentDate = new Date();
  const [month, _, year] = birthday.split(".");
  let currentAge = currentDate.getFullYear() - year;

  if (currentDate.getMonth() < month) {
    return currentAge - 1;
  }

  return currentAge;
}
