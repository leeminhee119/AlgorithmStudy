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
  input.forEach((inputLine) => {
    if (inputLine === "0") return;

    const k = Number(inputLine.split(" ")[0]);
    const S = inputLine.split(" ").slice(1).map(Number);

    function combination(arr, r) {
      const result = [];
      if (r === 1) {
        return arr.map((el) => [el]);
      }
      arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(index + 1)];
        const comb = combination(rest, r - 1);
        const attached = comb.map((el) => [fixed, ...el]);
        result.push(...attached);
      });
      return result;
    }

    const result = combination(S, 6);
    console.log(result.map((el) => el.join(" ")).join("\n"));
    console.log();
  });
}
