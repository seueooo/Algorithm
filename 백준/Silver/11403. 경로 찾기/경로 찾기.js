const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let lineIdx = 0;

let n = Number(input[lineIdx]);
let result = Array.from({ length: n }, () => Array(n).fill(0));

let arr = [];

for (let i = 0; i < n; i++) {
  lineIdx++;
  arr.push(input[lineIdx].split(" ").map(Number));
}

let visited;

function dfs(node, visited) {
  for (let i = 0; i < n; i++) {
    if (arr[node][i] === 1 && !visited[i]) {
      visited[i] = true;
      dfs(i, visited);
    }
  }
}

for (let i = 0; i < n; i++) {
  visited = Array(n).fill(false);
  dfs(i, visited);
  for (let j = 0; j < n; j++) {
    if (visited[j]) result[i][j] = 1;
  }
}

result.forEach((row) => console.log(row.join(" ")));
