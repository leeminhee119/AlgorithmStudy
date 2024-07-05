const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const Ai = arr[0].split(' ').map(Number);
const [B, C] = arr[1].split(' ').map(Number);

const subCnt = Ai.reduce((acc, A) => {
    return acc + (A <= B ? 0 : Math.ceil((A - B) / C));
}, 0)

console.log(subCnt + parseInt(n));