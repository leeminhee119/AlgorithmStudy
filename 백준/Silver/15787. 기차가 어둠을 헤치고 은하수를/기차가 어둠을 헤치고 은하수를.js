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
  const [N, M] = lines[0].split(" ").map(Number);
  const commands = lines.slice(1).map((line) => line.split(" ").map(Number));
  const trains = Array.from({ length: N }, () => new Array(20 + 1).fill(0));

  function executeCommand(commandNo, trainNo, seatNo) {
    const train = trains[trainNo - 1];
    switch (commandNo) {
      case 1:
        train[seatNo] = 1;
        break;
      case 2:
        train[seatNo] = 0;
        break;
      case 3:
        for (let i = 20; i > 1; i--) {
          train[i] = train[i - 1];
        }
        train[1] = 0;
        break;
      case 4:
        for (let i = 1; i < 20; i++) {
          train[i] = train[i + 1];
        }
        train[20] = 0;
        break;
    }
    return train;
  }
  commands.forEach((command) => {
    // 명령 수행
    const train = executeCommand(command[0], command[1], command[2]);
    trains[command[1] - 1] = train;
  });
  console.log(new Set(trains.map((train) => train.join(""))).size);
}
