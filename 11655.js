const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let i = 0;
let arr = [];
while (i < input.length) {
  const changedWord = input[i].split("").map((item) => {
    if (item >= "A" && item <= "Z") {
      return String.fromCharCode(((item.charCodeAt() - 65 + 13) % 26) + 65);
    } else if (item >= "a" && item <= "z") {
      return String.fromCharCode(((item.charCodeAt() - 97 + 13) % 26) + 97);
    } else return item;
  });
  i += 1;
  arr.push(changedWord.join(""));
}

console.log(arr.join(" "));
