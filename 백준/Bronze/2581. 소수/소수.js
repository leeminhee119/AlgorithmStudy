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
  const [M, N] = input.map(Number);
  const primes = [];
  for (let number = M; number <= N; number++) {
    let isPrime = true;
    for (let j = 2; j < number; j++) {
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (number !== 1 && isPrime) {
      primes.push(number);
    }
  }
  if (primes.length === 0) {
    console.log(-1);
    return;
  }
  console.log(primes.reduce((acc, cur) => acc + cur, 0));
  console.log(Math.min(...primes));
}
