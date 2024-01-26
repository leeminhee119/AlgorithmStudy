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
  const distances = Array.from({ length: N + 1 }, () =>
    new Array(N + 1).fill(0)
  );
  const graph = Array.from({ length: N + 1 }, () => []);
  input.slice(1).forEach((row) => {
    const [A, B] = row.split(" ").map(Number);
    graph[A].push(B);
    graph[B].push(A);
  });

  function calDistance(start, end) {
    const queue = [start];
    const distance = new Array(N + 1).fill(0);
    distance[start] = 1;

    while (queue.length) {
      const n = queue.shift();
      const nexts = graph[n];

      for (let i = 0; i < nexts.length; i++) {
        const next = nexts[i];
        if (!distance[next]) {
          queue.push(next);
          distance[next] = distance[n] + 1;
        }
      }
    }
    return distance[end] - 1;
  }

  for (let n = 1; n <= N; n++) {
    for (let d = 1; d <= N; d++) {
      if (d === n) continue;
      distances[n][d] = calDistance(n, d);
    }
  }

  function getTotalDistance([B1, B2]) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
      const d1 = distances[i][B1];
      const d2 = distances[i][B2];
      sum += Math.min(d1, d2);
    }
    return sum;
  }

  let minDistance = Infinity;
  let finalBuildings = [];

  function dfs(index, cnt, buildings) {
    if (cnt === 2) {
      const newDistance = getTotalDistance(buildings);
      if (newDistance < minDistance) {
        minDistance = newDistance;
        finalBuildings = [...buildings];
      } else if (newDistance === minDistance) {
        const newSmall = Math.min(...buildings);
        const originSmall = Math.min(...finalBuildings);
        if (newSmall < originSmall) {
          finalBuildings = [...buildings];
        } else if (newSmall === originSmall) {
          const newBig = Math.max(...buildings);
          const originBig = Math.max(...finalBuildings);
          if (newBig < originBig) {
            finalBuildings = [...buildings];
          }
        }
      }
      return;
    }
    for (let i = index; i <= N; i++) {
      if (buildings.includes(i)) continue;
      buildings.push(i);
      dfs(i, cnt + 1, buildings);
      buildings.pop();
    }
  }

  dfs(1, 0, []);
  console.log(finalBuildings.sort((a, b) => a - b).join(" "), minDistance * 2);
}
