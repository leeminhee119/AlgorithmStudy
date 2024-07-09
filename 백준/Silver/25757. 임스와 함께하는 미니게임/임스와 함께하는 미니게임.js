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
    solution(lines);
    process.exit();
  });

function solution(lines) {
  const [N, game] = lines[0].split(" ");
  const people = [...new Set(lines.slice(1))];

  switch (game) {
    case "Y":
      console.log(Math.floor(people.length / 1));
      return;
    case "F":
      console.log(Math.floor(people.length / 2));
      return;
    case "O":
      console.log(Math.floor(people.length / 3));
      return;
  }
}
