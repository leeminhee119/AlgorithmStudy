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

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  const graph = Array.from({ length: N }, () => new Array());
  input.slice(1).forEach((rowStr, rowIdx) => {
    const rowArr = rowStr.split(" ").map(Number);
    graph[rowIdx] = [...rowArr];
  });

  const counts = [];
  makeWall(graph, 0, counts);
  console.log(Math.max(...counts));
}

function makeWall(graph, cnt, counts) {
  if (cnt === 3) {
    counts.push(bfs(graph));
    return;
  }
  for (let x = 0; x < graph.length; x++) {
    for (let y = 0; y < graph[0].length; y++) {
      if (graph[x][y] === 0) {
        graph[x][y] = 1;
        makeWall(graph, cnt + 1, counts);
        graph[x][y] = 0;
      }
    }
  }
}

function bfs(graph) {
  const testGraph = JSON.parse(JSON.stringify(graph));
  const queue = [];
  for (let x = 0; x < testGraph.length; x++) {
    for (let y = 0; y < testGraph[0].length; y++) {
      if (testGraph[x][y] === 2) {
        queue.push([x, y]);
      }
    }
  }
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= testGraph.length ||
        ny >= testGraph[0].length
      ) {
        continue;
      }
      if (testGraph[nx][ny] === 2 || testGraph[nx][ny] === 1) {
        continue;
      }
      testGraph[nx][ny] = 2;
      queue.push([nx, ny]);
    }
  }

  let count = 0;
  for (let x = 0; x < testGraph.length; x++) {
    for (let y = 0; y < testGraph[0].length; y++) {
      if (testGraph[x][y] === 0) {
        count++;
      }
    }
  }

  return count;
}
