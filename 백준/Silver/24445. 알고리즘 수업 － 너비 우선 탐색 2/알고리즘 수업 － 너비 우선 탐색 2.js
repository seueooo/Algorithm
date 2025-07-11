const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
});

rl.on("close", function () {
  let lineIdx = 0;
  let [n, m, r] = input[lineIdx].split(" ").map(Number);
  let graph = Array(n + 1)
    .fill()
    .map(() => []);

  for (let i = 0; i < m; i++) {
    let [u, v] = input[lineIdx + 1].split(" ").map(Number);
    lineIdx++;
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let i = 1; i <= n; i++) {
    graph[i].sort((a, b) => b - a);
  }

  bfs(n, graph, r);
});

function bfs(n, graph, r) {
  let queue = [];
  let visited = Array(n + 1).fill(false);
  let order = Array(n + 1).fill(0);
  let cnt = 1;
  queue.push(r);
  visited[r] = true;
  order[r] = cnt;
  let head = 0;

  while (head < queue.length) {
    let node = queue[head++];

    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        cnt++;
        order[next] = cnt;
        queue.push(next);
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    console.log(order[i]);
  }
}
