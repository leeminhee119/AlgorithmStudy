const fs = require("fs");
const [n, target] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const graph = new Array(n).fill(0).map(() => new Array(n).fill(0));

const dx = [-1, 0, 1, 0]; // starts from up
const dy = [0, 1, 0, -1];
const mid = (n - 1) / 2;
let [x, y] = [mid, mid];
let curNum = 1;
graph[x][y] = curNum;
let i = 0;
const targetPos = [];

function checkTarget(x, y, target) {
  if (graph[x][y] === target) {
    targetPos.push(x + 1);
    targetPos.push(y + 1);
  }
  return;
}
checkTarget(x, y, target);

while (curNum < n ** 2) {
  x += dx[i];
  y += dy[i];
  graph[x][y] = ++curNum;
  checkTarget(x, y, target);

  nextDir = (i + 1) % 4;
  nextX = x + dx[nextDir];
  nextY = y + dy[nextDir];
  while (graph[nextX][nextY] !== 0 && curNum < n ** 2) {
    x += dx[i];
    y += dy[i];
    graph[x][y] = ++curNum;
    checkTarget(x, y, target);

    nextX = x + dx[nextDir];
    nextY = y + dy[nextDir];
  }
  i = nextDir;
}

graph.forEach((row) => {
  console.log(row.join(" "));
});
console.log(targetPos.join(" "));
