const fs = require("fs");
const { sep } = require("path");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let lineIdx = 0;
let answer = 0;

let [n, m, v] = input[lineIdx].split(" ").map(Number);

let dfs_arr = [];
let bfs_arr = [];
let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < m; i++) {
  lineIdx++;
  let [a, b] = input[lineIdx].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// 정점 번호가 작은 것을 먼저 방문
for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

let visited = [];

function dfs(node) {
  visited[node] = true;
  dfs_arr.push(node);
  for (let i of graph[node]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
}

function bfs(x) {
  let q = [];
  q.push(x);
  visited[x] = true;

  while (q.length != 0) {
    let a = q.shift();
    bfs_arr.push(a);
    for (let i of graph[a]) {
      if (!visited[i]) {
        visited[i] = true;
        q.push(i);
      }
    }
  }
}

visited = Array(n + 1).fill(false);
dfs(v);

visited = Array(n + 1).fill(false);
bfs(v);

console.log(dfs_arr.join(" "));
console.log(bfs_arr.join(" "));
