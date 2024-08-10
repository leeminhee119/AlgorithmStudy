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
  const [p, m] = lines[0].split(" ").map(Number); // [playerCnt, memberCnt]
  const players = lines
    .slice(1)
    .map((line) => [+line.split(" ")[0], line.split(" ")[1]]); // [level, nickname]
  const levelMap = players.reduce((acc, [level, nickname]) => {
    acc.set(nickname, level);
    return acc;
  }, new Map());

  // 앞에서부터 확인
  // 맨 앞의 플레이어 레벨 +- 10 , 멤버 정원 안 찼을 때
  // 들어갈 방이 없다면 새로 생성

  const rooms = new Array();
  players.forEach(([level, nickname]) => {
    if (rooms.length === 0) {
      rooms.push([nickname]);
    } else {
      let isJoined = false;
      for (let room of rooms) {
        // 방 입장 조건 불충족
        if (
          room.length >= m ||
          levelMap.get(room[0]) + 10 < level ||
          levelMap.get(room[0]) - 10 > level
        ) {
          continue;
        }
        // 방 입장
        room.push(nickname);
        isJoined = true;
        break;
      }

      if (!isJoined) {
        rooms.push([nickname]);
      }
    }
  });

  for (let room of rooms) {
    if (room.length < m) {
      console.log("Waiting!");
    } else {
      console.log("Started!");
    }
    console.log(
      room
        .sort()
        .map((nickname) => `${levelMap.get(nickname)} ${nickname}`)
        .join("\n")
    );
  }
}
