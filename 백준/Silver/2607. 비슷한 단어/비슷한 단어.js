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
  // 같은 구성: 같은 종류 + 각각 같은 개수 -> 정렬 시 동일
  // 비슷한 단어: 하나 더하거나/빼거나/바꾸면 같은 구성인 경우
  const N = +lines[0];
  const targetWord = lines[1].split("");
  const words = lines.slice(2).map((word) => word.split(""));

  function isSimilar(target, word) {
    if (target.length > word.length) {
      const copiedTarget = [...target];
      word.forEach((char) => {
        const idx = copiedTarget.indexOf(char);
        if (idx !== -1) {
          copiedTarget.splice(idx, 1);
        }
      });
      if (copiedTarget.length === 1) return true;
    } else {
      const copiedWord = [...word];
      target.forEach((char) => {
        const idx = copiedWord.indexOf(char);
        if (idx !== -1) {
          copiedWord.splice(idx, 1);
        }
      });
      if (copiedWord.length <= 1) return true;
    }
    return false;
  }

  let answer = 0;
  words.forEach((word) => {
    if (isSimilar(targetWord, word)) answer++;
  });
  console.log(answer);
}
