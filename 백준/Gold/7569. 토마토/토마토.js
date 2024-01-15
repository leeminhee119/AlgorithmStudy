const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.rear + 1;
    }
  }

  add(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }
}

function solution(input) {
  const [M, N, H] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: H }, () =>
    Array.from({ length: N }, () => new Array())
  );
  input.slice(1).forEach((lineStr, lineIdx) => {
    const h = parseInt(lineIdx / N);
    const x = lineIdx % N;
    graph[h][x] = lineStr.split(" ").map(Number);
  });

  if (bfs(graph, M, N, H)) {
    console.log(0);
    return;
  }

  let days = 1;
  let impossible = false;
  for (let z = 0; z < H; z++) {
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (graph[z][x][y] === 0) {
          impossible = true;
        }
        if (graph[z][x][y] > days) {
          days = graph[z][x][y];
        }
      }
    }
  }
  console.log(impossible ? -1 : days - 1);
}

function bfs(graph, M, N, H) {
  const queue = new Queue();
  let allPos = true;
  for (let z = 0; z < H; z++) {
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (graph[z][x][y] === 1) {
          queue.add([z, x, y]);
        }
        if (graph[z][x][y] === 0) {
          allPos = false;
        }
      }
    }
  }
  if (allPos) {
    return true;
  }

  const dx = [-1, 1, 0, 0, 0, 0];
  const dy = [0, 0, -1, 1, 0, 0];
  const dz = [0, 0, 0, 0, -1, 1];
  while (queue.size()) {
    const [z, x, y] = queue.popleft();
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nz = z + dz[i];
      if (nx < 0 || ny < 0 || nz < 0 || nx >= N || ny >= M || nz >= H) {
        continue;
      }
      if (graph[nz][nx][ny] !== 0) {
        continue;
      }
      graph[nz][nx][ny] = graph[z][x][y] + 1;
      queue.add([nz, nx, ny]);
    }
  }
  return false;
}
