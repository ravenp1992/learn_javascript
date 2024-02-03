// function sum(value: number) {
//   return function (num: number) {
//     return value + num;
//   };
// }
// console.log(sum(1)(2));
// console.log(sum(5)(-1));

// let nums = [1, 2, 3, 4, 5, 6];

// function inBetween(num1: number, num2: number) {
//   return function (x) {
//     return x >= num1 && x <= num2;
//   };
// }

// function inArray(nums: number[]) {
//   return function (x: number) {
//     return nums.includes(x);
//   };
// }

// console.log(nums.filter(inBetween(3, 6)));
// console.log(nums.filter(inArray([1, 2, 10])));

// type User = {
//   name: string;
//   age: number;
//   surname: string;
// };

// let users: User[] = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// function byField(field: string) {
//   return (a: User, b: User) => (a[field] > b[field] ? 1 : -1);
// }
// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));

function makeArmy() {
  let shooters: (() => void)[] = [];

  // let i = 0;
  // while (i < 10) {
  //   let j = i;
  //   let shooter = function () {
  //     console.log(j);
  //   };
  //   shooters.push(shooter);
  //   i++;
  // }

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}
let army = makeArmy();
console.log(army[0]());
console.log(army[1]());
