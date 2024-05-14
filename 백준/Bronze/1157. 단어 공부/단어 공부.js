const fs = require("fs");

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
  const str = input[0].toUpperCase();
  const countMap = [...str].reduce((countMap, char) => {
    if (countMap[char]) {
      countMap[char]++;
    } else {
      countMap[char] = 1;
    }
    return countMap;
  }, {});
  const mostCommonAlphabets = [];
  const arr = Object.entries(countMap).sort((a, b) => b[1] - a[1]);
  if (arr.length > 1 && arr[0][1] === arr[1][1]) {
    console.log("?");
    return;
  }
  console.log(arr[0][0]);
}
