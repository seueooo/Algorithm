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
  const n = Number(input[0]);
  let index = 1;
  let queue = [];
  let front = 0;
  let result = [];

  for (let i = 0; i < n; i++) {
    const command = input[index++].split(" ");
    const cmd = command[0];

    if (cmd === "push") {
      queue.push(command[1]);
    } else if (cmd === "pop") {
      if (queue.length === front) result.push(-1);
      else result.push(queue[front++]);
    } else if (cmd === "size") {
      result.push(queue.length - front);
    } else if (cmd === "empty") {
      result.push(queue.length === front ? 1 : 0);
    } else if (cmd === "front") {
      result.push(queue.length === front ? -1 : queue[front]);
    } else if (cmd === "back") {
      result.push(queue.length === front ? -1 : queue[queue.length - 1]);
    }
  }

  console.log(result.join("\n"));
});