// Uppercase the first character

// Write a function ucfirst(str) to return the string str with
// the uppercased first character, for instance:

/**
 * Return string that capitalized the first character
 * @param {string} str
 * @return str
 */
function ucFirst(str) {
  if (!str) return str;

  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(ucFirst("john"));

// Check for spam

// Write a function checkSpam(str) that returns true if str contains 'viagra'
// or 'XXX' otherwise false.

/**
 * Check if string contains unwanted words and mark it a spam
 *
 * @param {string} str
 */
function checkSpam(str) {
  const filters = ["viagra", "xxx"];

  for (let word of filters) {
    if (str.toLowerCase().includes(word.toLowerCase())) {
      return true;
    }
  }

  return false;
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxx"));
console.log(checkSpam("innocent rabbit"));

// Truncatte the text

// Create a function truncate (str, maxLength) that checks the length of the str
// and, if it exeeds maxLength - replaces the end of str with the ellipsis character
// "...", to make its length equal to maxLength.

/**
 * Return a string with ellipsis if exceed max length
 * @param {string} str
 * @param {number} maxLength
 */
function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return `${str.slice(0, maxLength - 1)}...`;
  }

  return str;

  // return (str.length > maxLength) ? str.slice(0, maxLength - 1) + '...' : str
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

/**
 * Return the numeric value without the currency
 *
 * @param {string} str
 8 @return number
 */
function extractCurrencyValue(str) {
  return +str.slice(1);
}
