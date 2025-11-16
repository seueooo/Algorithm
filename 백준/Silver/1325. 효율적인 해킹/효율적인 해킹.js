const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  let idx = 1;
  let answer = [];
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < m; i++) {
    const [a, b] = input[idx++].split(" ").map(Number);
    graph[b].push(a);
  }

  function dfs(start) {
    const s = [start];
    const visited = new Array(n + 1).fill(false);
    let cnt = 1;
    visited[start] = true;
    while (s.length > 0) {
      const current = s.pop();
      for (let i = 0; i < graph[current].length; i++) {
        const next = graph[current][i];
        if (!visited[next]) {
          visited[next] = true;
          s.push(next);
          cnt++;
        }
      }
    }
    return cnt;
  }
  let maxCount = 0;
  for (let i = 1; i <= n; i++) {
    const cnt = dfs(i);
    if (cnt > maxCount) {
      maxCount = cnt;
      answer.length = 0;
      answer.push(i);
    } else if (cnt === maxCount) {
      answer.push(i);
    }
  }
  console.log(answer.join(" "));
});
