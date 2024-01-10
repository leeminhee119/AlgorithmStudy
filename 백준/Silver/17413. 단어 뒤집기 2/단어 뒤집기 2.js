const fs = require("fs");
const path = "dev/stdin";

const readline = require("readline").createInterface({
  input: fs.createReadStream(path),
  output: process.stdout,
});

let input = "";

readline
  .on("line", function (line) {
    input = line;
    readline.close();
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });

function solution(s) {
  s = s.replace(/<[a-z0-9 ]+>|[a-z0-9]+/g, (match) => {
    if (match[0] === "<") {
      return match;
    } else {
      return [...match].reverse().join("");
    }
  });

  console.log(s);
}
