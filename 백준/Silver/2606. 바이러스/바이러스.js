const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let lineIdx = 0;
let answer = 0;

let n = Number(input[lineIdx]);
lineIdx++;
let k = Number(input[lineIdx]);

let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < k; i++) {
  lineIdx++;
  let [a, b] = input[lineIdx].split(" ").map(Number);

  // 양방향 연결
  graph[a].push(b);
  graph[b].push(a);
}

let visited = Array(n + 1).fill(false);

function dfs(node) {
  visited[node] = true;

  // 현재 노드에 연결된 모든 컴퓨터를 하나씩 꺼내서 반복
  for (let i of graph[node]) {
    // 연결된 컴퓨터 i가 방문하지 않은 컴퓨터면
    if (!visited[i]) {
      // 해당 컴퓨터 감염
      answer++;
      // 재귀적으로 그 컴퓨터도 다시 탐색 시작
      dfs(i);
    }
  }
}

dfs(1);

console.log(answer);
