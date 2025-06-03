const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

let lineIdx = 0;

while (true) {
  let answer = 0;
  let [w, h] = input[lineIdx].split(" ").map(Number);
  lineIdx++;

  if (w === 0 && h === 0) {
    break;
  }

  let arr = [];
  for (let i = 0; i < h; i++) {
    arr.push(input[lineIdx].split(" ").map(Number));
    lineIdx++;
  }

  let visited = Array(h)
    .fill()
    .map(() => Array(w).fill(false));

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (arr[i][j] === 1 && !visited[i][j]) {
        // 연결된 구역 전체를 방문 처리
        bfs(i, j, visited, arr, w, h);
        // 하나의 구역을 발견했으므로 카운트 증가
        answer++;
      }
    }
  }

  console.log(answer);
}

function bfs(x, y, visited, arr, w, h) {
  let q = [];
  q.push([x, y]);
  visited[x][y] = true;

  while (q.length != 0) {
    let [curX, curY] = q.shift();

    for (let i = 0; i < 8; i++) {
      let nx = curX + dx[i];
      let ny = curY + dy[i];

      if (
        nx >= 0 &&
        nx < h &&
        ny >= 0 &&
        ny < w &&
        !visited[nx][ny] &&
        arr[nx][ny] === 1
      ) {
        visited[nx][ny] = true;

        q.push([nx, ny]);
      }
    }
  }
}
