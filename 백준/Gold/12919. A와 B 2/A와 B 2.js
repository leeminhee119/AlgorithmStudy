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
  const S = input[0];
  const T = input[1];
  const totalCnt = T.length - S.length;
  const sCntA = S.split("").filter((cur) => cur === "A").length;
  const sCntB = S.length - sCntA;
  const tCntA = T.split("").filter((cur) => cur === "A").length;
  const tCntB = T.length - tCntA;

  if (tCntA < sCntA || tCntB < sCntB) {
    console.log(0);
    return;
  }

  let isPossible = false;

  function change(curT, cnt) {
    if (cnt === totalCnt) {
      if (curT === S) {
        isPossible = true;
      }
      return;
    }
    if (curT[curT.length - 1] === "A") {
      change(curT.slice(0, curT.length - 1), cnt + 1);
    }
    if (curT.split("").reverse().join("")[curT.length - 1] === "B") {
      change(
        curT
          .split("")
          .reverse()
          .join("")
          .slice(0, curT.length - 1),
        cnt + 1
      );
    }
    return;
  }

  change(T, 0);
  console.log(isPossible ? 1 : 0);
  return;
}
