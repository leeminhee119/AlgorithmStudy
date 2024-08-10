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
  const T = +lines[0];
  for (let i = 0; i < T; i++) {
    const N = +lines[i * 2 + 1];
    const prices = lines[i * 2 + 2].split(" ").map(Number);

    // 뒤에 오늘보다 가격이 큰 날이 있으면 '산다.'
    // 뒤에 오늘보다 가격이 큰 날이 없으면 '판다.'

    // 뒤에서부터 순회하여,
    // 가장 높은 가격을 갱신한다.

    let balance = 0;
    let curHighestPrice = prices[N - 1];

    for (let i = N - 1; i >= 0; i--) {
      if (prices[i] >= curHighestPrice) {
        curHighestPrice = prices[i];
      }
      balance += curHighestPrice - prices[i];
    }

    console.log(balance);
  }
}
