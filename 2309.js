const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = [];
let arr = input.map(Number);
let sum = 0;
let result = 0;

while (sum !== 100) {
  sum = 0;
  answer = arr.sort(() => Math.random() - 0.5);
  result = answer.slice(0, 7);
  sum = result.reduce((a, b) => a + b, 0);
}
result.sort((a, b) => a - b);
result.forEach((item) => {
  console.log(item);
});
