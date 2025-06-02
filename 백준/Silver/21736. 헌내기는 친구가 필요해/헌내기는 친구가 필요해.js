const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

// 1번 인덱스부터 끝까지 반환
// 문자열이 아닌 2차원 배열로 파싱해야 시간 단축!!!!!!!!!
const arr = input.slice(1).map((x) => x.split(""));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let visited = Array(n)
  .fill()
  .map(() => Array(m).fill(false));

let result = 0;

function bfs(x, y) {
  let q = [];
  q.push([x, y]);
  visited[x][y] = true;

  while (q.length != 0) {
    let [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // 벽인지 조건으로 먼저 걸러줘야 그나마 시간 단축..
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        !visited[nx][ny] &&
        arr[nx][ny] !== "X"
      ) {
        if (arr[nx][ny] === "O") {
          q.push([nx, ny]);
          visited[nx][ny] = true;
        } else if (arr[nx][ny] === "P") {
          q.push([nx, ny]);
          visited[nx][ny] = true;
          result += 1;
        }
      }
    }
  }
  return result;
}

// "I"의 좌표 찾기
// 중첩된 반복문에서 어떤 반복문을 빠져나갈지 label 지정
outer: for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === "I") {
      bfs(i, j);
      break outer;
    }
  }
}

if (result > 0) {
  console.log(result);
} else {
  console.log("TT");
}
