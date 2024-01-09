const fs = require("fs");
const str = fs.readFileSync("dev/stdin").toString().trim();

const strArr = str.split("");
const flagArr = new Array(strArr.length).fill(0);
const quack = "quack";
let countDucks = 0;
let remainCnt = strArr.length;

while (remainCnt !== 0) {
  let curIdx = 0;
  let hasDuck = false;

  for (let i = 0; i < strArr.length; i++) {
    const visited = flagArr[i];
    if (visited) {
      continue;
    }

    const isTarget = quack[curIdx] === strArr[i];
    if (isTarget) {
      if (quack[curIdx] === "k") {
        hasDuck = true;
        remainCnt -= 5;
      }
      curIdx = (curIdx + 1) % 5;
      flagArr[i] = 1;
    }
  }
  if (hasDuck) {
    countDucks++;
  } else {
    break;
  }
}

console.log(remainCnt !== 0 ? -1 : countDucks);
