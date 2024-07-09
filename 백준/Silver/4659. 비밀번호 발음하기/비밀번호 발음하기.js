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
  const vowels = ["a", "e", "i", "o", "u"];
  function isAcceptable(password, isVowels) {
    if (isVowels.every((isVowel) => !isVowel)) return false;

    let cur = isVowels[0];
    let cnt = 1;
    for (let i = 1; i < isVowels.length; i++) {
      if (cnt === 3) return false;
      if (isVowels[i] === cur) {
        cnt++;
        continue;
      }
      cnt = 1;
      cur = isVowels[i];
    }
    if (cnt >= 3) return false;

    let hasContinued = false;
    for (let i = 1; i < password.length; i++) {
      if (password[i] === password[i - 1]) {
        if (password[i] === "e" || password[i] === "o") {
          continue;
        }
        return false;
      }
    }
    return true;
  }
  lines.slice(0, lines.length - 1).forEach((line) => {
    const isVowels = [...line].map((letter) => vowels.includes(letter));
    console.log(
      isAcceptable(line, isVowels)
        ? `<${line}> is acceptable.`
        : `<${line}> is not acceptable.`
    );
  });
}
