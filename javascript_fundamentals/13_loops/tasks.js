let i = 3;
while (i) {
  console.log(i--);
}

let x = 0;
while (++x < 5) console.log(x);

let y = 0;
while (y++ < 5) console.log(y);

for (let i = 0; i < 5; i++) console.log(i);

for (let i = 0; i < 5; ++i) console.log(i);

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) console.log(i);
}

let c = 0;
while (c < 3) {
  console.log(`number ${c}!`);
  c++;
}

// while (true) {
//   const input = +prompt("Enter a number greater than 100", "");

//   if (!input || input > 100) break;
// }

// for (let n = 2; n < 10; n++) {
//   if (n == 2) console.log(n);
//   if (n % 2 == 0) continue;
//   console.log(n);
// }

let num = 10;
nextPrime: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }
  console.log(i);
}
