const readline = require("readline");
(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let firstLine = 0;
  let graph = [];
  let currentRow = 0;
  let n, m;

  for await (const line of rl) {
    if (firstLine === 0) {
      firstLine = line.trim().split(" ").map(Number);
      [n, m] = firstLine;
    } else {
      let row = line.trim().split(" ").map(Number);
      graph.push(row);
      currentRow++;
    }
    if (currentRow === n) {
      rl.close();
      break;
    }
  }

  let visited = Array(n)
    .fill()
    .map(() => Array(m).fill(false));

  let paintingCount = 0;
  let maxSize = 0;
  let currentSize = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function bfs(x, y) {
    let q = [];
    q.push([x, y]);
    visited[x][y] = true;
    let size = 1;
    while (q.length != 0) {
      let [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
          if (!visited[nx][ny] && graph[nx][ny] === 1) {
            visited[nx][ny] = true;
            q.push([nx, ny]);
            size++;
          }
        }
      }
    }
    return size;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 아직 방문하지 않은 1인 칸을 발견하면
      if (!visited[i][j] && graph[i][j] === 1) {
        currentSize = bfs(i, j); // BFS로 연결된 영역 탐색
        paintingCount++; // 그림 개수 증가
        maxSize = Math.max(maxSize, currentSize); // 최대 크기 갱신
      }
    }
  }
  console.log(paintingCount);
  console.log(maxSize);
  process.exit();
})();
