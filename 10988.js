const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = [...input];

let i = 0;
let num = 0;

while (i < Math.floor(arr.length / 2)) {
  if (arr[i] === arr[arr.length - 1 - i]) {
    num += 1;
  }
  i += 1;
}

if (num === Math.floor(arr.length / 2)) {
  console.log(1);
} else {
  console.log(0);
}
