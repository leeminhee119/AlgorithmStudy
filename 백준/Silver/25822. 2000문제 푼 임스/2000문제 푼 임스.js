const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

readline.on("line", function (line) {
  lines.push(line);
}).on("close", function () {
  solution(lines);
  process.exit();
});

function solution(lines) {
  // 첫 번째 줄: 코인 C
  const C = parseFloat(lines[0]);
  // 두 번째 줄: 날 수 N
  const N = parseInt(lines[1], 10);
  // 세 번째 줄: 문제 풀이 수
  const counts = lines[2].split(" ").map(Number);

  // 사용 가능한 프리즈의 수 (0.99 코인당 1개, 최대 2개)
  const freezeCnt = Math.min(2, Math.floor(C / 0.99));

  // 슬라이딩 윈도우 방식으로 스트릭 최대 유지 일수 구하기
  let maxStreak = 0;
  let freezeUsed = 0;
  let s = 0;

  for (let e = 0; e < N; e++) {
    if (counts[e] === 0) {
      freezeUsed++;
    }

    // 프리즈 사용 횟수를 넘으면 시작점(s)을 증가시켜 스트릭 구간 조정
    while (freezeUsed > freezeCnt) {
      if (counts[s] === 0) {
        freezeUsed--;
      }
      s++;
    }

    // 스트릭이 유지된 구간의 최대 길이를 저장
    maxStreak = Math.max(maxStreak, e - s + 1);
  }

  // N일 중 하루에 가장 많이 푼 문제 수 구하기
  const largest = Math.max(...counts);

  console.log(maxStreak);
  console.log(largest);
}