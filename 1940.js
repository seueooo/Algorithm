const fs = require("fs");
let [N, M, num] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

N = Number(N);
M = Number(M);

num = num.trim().split(" ").map(Number);

let start = 0;
let end = 1;

let count = 0;
for (let i = start; i < num.length; i++) {
  end = i + 1;
  if (num[i] === 0) continue;
  while (true) {
    if (end >= num.length) break;
    if (num[end] !== 0) {
      if (num[i] + num[end] === M) {
        num[i] = 0;
        num[end] = 0;
        count++;
        break;
      }
    }
    end++;
  }
}

console.log(count);
