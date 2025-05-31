const { readFileSync } = require("fs");
let input = readFileSync("/dev/stdin").toString().trim().split("\n");
let line = input[0].split("");

const dial = {
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
};

let total = 0;

line.forEach((i) => {
  total += Number(Object.keys(dial).find((key) => dial[key].includes(i))) + 1;
});

console.log(total);
