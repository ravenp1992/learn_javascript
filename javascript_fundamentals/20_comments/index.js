// Bad Comments
// Novices tend to use comments to explain "what is going on in the code"
// But in a godo code, the amount of such "explanatory" comments should be
// minimal. Seriously, the code should be easy to understand without them.

// There's a great rule about that: "If the code is unclear that it requires
// a comment, then maybe it should be rewritten instead."

// Recipe: factor out functions

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {
//     // check if i is a prime number
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) continue nextPrime;
//     }
//   }
// }

// The better variant, with a factored out function isPrime:
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    console.log(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

showPrimes(10);

// JSDoc

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
function pow(x, n) {
  // TODO
}
