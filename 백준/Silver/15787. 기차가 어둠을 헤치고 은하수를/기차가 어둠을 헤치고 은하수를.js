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
  const [N, M] = input[0].split(" ").map(Number);
  const trains = Array.from({ length: N }, () => new Array(20).fill(0));

  function command_execute(command, train, seatNumber) {
    switch (command) {
      case 1:
        train[seatNumber - 1] = 1;
        break;
      case 2:
        train[seatNumber - 1] = 0;
        break;
      case 3:
        for (let i = train.length - 1; i > 0; i--) {
          train[i] = train[i - 1];
        }
        train[0] = 0;
        break;
      case 4:
        for (let i = 0; i < train.length - 1; i++) {
          train[i] = train[i + 1];
        }
        train[train.length - 1] = 0;
        break;
    }
  }

  input.slice(1).forEach((rowString) => {
    const [command, trainNumber, seatNumber] = rowString.split(" ").map(Number);
    const newTrain = command_execute(
      command,
      trains[trainNumber - 1],
      seatNumber
    );
  });

  console.log(new Set(trains.map((arr) => arr.join(""))).size);
}
