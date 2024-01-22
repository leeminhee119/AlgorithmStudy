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
  const T = parseInt(input[0]);
  for (let i = 0; i < T; i++) {
    const startIndex = i * 3 + 1;
    const binary = input
      .slice(startIndex, startIndex + 3)
      .map((row) =>
        row
          .split(" ")
          .map((el) => (el === "H" ? 1 : 0))
          .join("")
      )
      .join("");

    const cases = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    function flip(integer, caseIndex) {
      let bin = integer.toString(2).padStart(9, "0");
      const [x, y, z] = cases[caseIndex];
      bin = bin.substring(0, x) + Math.abs(bin[x] - 1) + bin.substring(x + 1);
      bin = bin.substring(0, y) + Math.abs(bin[y] - 1) + bin.substring(y + 1);
      bin = bin.substring(0, z) + Math.abs(bin[z] - 1) + bin.substring(z + 1);
      return parseInt(bin, 2);
    }

    flip(parseInt(binary, 2), 0).toString(2);
    const counts = [];

    const allH = parseInt("000000000", 2);
    const allT = parseInt("111111111", 2);

    function bfs(integer, visited) {
      const queue = [integer];
      visited[integer] = 1;
      while (queue.length) {
        const cur = queue.shift();
        if (cur === allH || cur === allT) {
          return visited[cur] - 1;
        }
        for (let i = 0; i < cases.length; i++) {
          const next = flip(cur, i);
          if (visited[next]) {
            continue;
          }
          visited[next] = visited[cur] + 1;
          queue.push(next);
        }
      }
      return -1;
    }

    console.log(bfs(parseInt(binary, 2), new Array(allT + 1).fill(0)));
  }
}
