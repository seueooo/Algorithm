const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const arr = [...input];

let alphabet = Array.from({ length: 26 }, () => 0);

arr.forEach((item) => {
  alphabet[item.charCodeAt() - 97] += 1;
});

console.log(alphabet.join(" "));
