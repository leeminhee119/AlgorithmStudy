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
  const n = Number(input[0]);

  function split(numStr) {
    const LEN = numStr.length;
    const splitIndexes = getCombinations(
      Array.from({ length: LEN - 1 }, (_, i) => i),
      2
    );
    const splitNumStrs = [];
    splitIndexes.forEach((splitIdxComb) => {
      const splitNumStr = [];
      splitIdxComb.forEach((splitIdx, idx, origin) => {
        if (idx === 0) {
          splitNumStr.push(numStr.slice(0, splitIdx + 1));
          return;
        }
        splitNumStr.push(numStr.slice(origin[idx - 1] + 1, splitIdx + 1));
      });
      splitNumStr.push(numStr.slice(splitIdxComb[splitIdxComb.length - 1] + 1));
      splitNumStrs.push(splitNumStr);
    });

    return splitNumStrs;
  }

  let minCnt = 100000000000;
  let maxCnt = 0;

  function getNewNumber(num, oddCnt) {
    const numStr = num.toString();
    oddCnt += countOdd(numStr);
    if (numStr.length == 1) {
      minCnt = Math.min(minCnt, oddCnt);
      maxCnt = Math.max(maxCnt, oddCnt);
      return oddCnt;
    } else if (numStr.length === 2) {
      return getNewNumber(parseInt(numStr[0]) + parseInt(numStr[1]), oddCnt);
    }
    const splitNumStrs = split(numStr);
    if (splitNumStrs.length === 0) return;
    splitNumStrs.forEach((splitNumStr) => {
      const newNum = splitNumStr.reduce((acc, strNumStr) => {
        return acc + parseInt(strNumStr);
      }, 0);
      return getNewNumber(newNum, oddCnt);
    });
  }

  function countOdd(numStr) {
    return [...numStr].reduce((acc, cur) => {
      if (cur % 2 !== 0) return acc + 1;
      else return acc;
    }, 0);
  }

  const newNum = getNewNumber(n, 0);
  console.log(minCnt, maxCnt);
}

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}
