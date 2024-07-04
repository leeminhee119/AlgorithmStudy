const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

readline
  .on("line", function (line) {
    lines.push(line);
  })
  .on("close", function () {
    const n = +lines[0];
    const arr = lines.slice(1);
    solution(n, arr);
    process.exit();
  });

function solution(n, arr) {
  const S = arr.map((line) => line.split(" ").map(Number));
  const numbers = Array.from({ length: n }, (_, i) => i);

  function getPower(arr) {
    let power = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const a = arr[i];
        const b = arr[j];
        power += S[a][b] + S[b][a];
      }
    }

    return power;
  }

  let minDiff = Infinity;

  const startTeam = [];
  function backtrack(cnt, start) {
    if (cnt === n / 2) {
      const linkTeam = numbers.filter((num) => !startTeam.includes(num));
      const diff = Math.abs(getPower(startTeam) - getPower(linkTeam));
      minDiff = Math.min(diff, minDiff);
      return;
    }

    for (let i = start; i < n; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      startTeam.push(i);
      backtrack(cnt + 1, i);
      visited[i] = false;
      startTeam.pop();
    }
  }

  const visited = new Array(n).fill(false);
  backtrack(0, 0);
  console.log(minDiff);
}
