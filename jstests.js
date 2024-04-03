/**
 * 
 * this is only the test for some js methods 
 const fruits = ["apple", "mango", "banana", "orange"];

const neD = fruits.map((it, i) => {
  console.log("index: " + i, " item: " + it);
  return it;
});

console.log(neD);

const red = fruits.filter((itm, d) => itm.includes("n"));

const num = [12, 16, 156, 897, 4555, 2020, 5456];

const total = num.reduce((prev, curr) => {
  return prev + curr;
}, 0);

console.log(total);

const res = fruits.every((ite) => {
  return ite.includes("a");
});

const rest = num.every((im) => {
  return im > 500;
});

console.log(res);
console.log(rest);

 */

// Challange #1
// 1. create an array of 50 random numbers range between 1 and 100 programmatically
const randomNum = new Array(50)
  .fill()
  .map(() => Math.floor(Math.random() * 100) + 1);
console.log("Random Array: \n" + randomNum);

//2. sort the array in descending order
console.log(
  "Sorted Array in Descending order: \n" + randomNum.sort((a, b) => b - a)
);

//3. get total of the array
console.log(
  "The Total value of the array is: " +
    randomNum.reduce((previousValue, CurrentValue) => {
      return previousValue + CurrentValue;
    }, 0)
);

//4.Divide original array in to 2 new arrays that contains even or odd numbers only each.

// 5. remove duplicate number for the original array

// Challange #2 create unique array 50 numbers rang between 1 and 100 programmatically
