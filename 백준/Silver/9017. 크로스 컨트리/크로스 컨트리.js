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
  const T = Number(lines[0]);

  for (let i = 0; i < T; i++) {
    // 순서대로 들어온 모든 선수들의 팀 번호
    const members = lines[(i + 1) * 2].split(" ").map(Number);

    // 각 팀이 몇 명이 참여했는지
    const memberCounts = members.reduce((acc, teamNo) => {
      if (acc[teamNo] === undefined) {
        acc[teamNo] = 1;
      } else {
        acc[teamNo]++;
      }
      return acc;
    }, {});

    // 각 팀의 각 선수 점수 정보, 여섯 명이 전부 참여하지 않은 경우 제외
    let currentScore = 1;
    const scores = members.reduce((acc, teamNo) => {
      if (memberCounts[teamNo] === 6) {
        if (acc[teamNo] === undefined) {
          acc[teamNo] = [currentScore];
        } else {
          acc[teamNo].push(currentScore);
        }
        currentScore++;
      }
      return acc;
    }, {});

    const candTeams = Object.keys(scores).map(Number);

    // 다섯번째 주자가 빨리 들어온대로 먼저 정렬
    candTeams.sort((a, b) => scores[a][4] - scores[b][4]);

    // 상위 네 명의 점수 합이 작은 순서대로 정렬
    candTeams.sort(
      (a, b) =>
        scores[a].slice(0, 4).reduce((acc, cur) => acc + cur, 0) -
        scores[b].slice(0, 4).reduce((acc, cur) => acc + cur, 0)
    );

    // 가장 낮은 점수의 팀이 우승, 우승팀 번호 출력
    console.log(candTeams[0]);
  }
}
