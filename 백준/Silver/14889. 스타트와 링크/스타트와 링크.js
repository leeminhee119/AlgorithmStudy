const lines = [];

require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
}).on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const n = +lines[0];
    const arr = lines.slice(1);
    solution(n, arr);
    process.exit();
})

function solution(n, arr) {
    
const S = arr.map((line) => line.split(' ').map(Number));

const getCombinations = (arr, r) => {
    const result = [];
    if (r === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const comb = getCombinations(rest, r - 1);
        const attached = comb.map((el) => [fixed, ...el]);
        result.push(...attached);
    })
    return result;
}

const getPower = (arr) => {
    const couples = getCombinations(arr, 2);
    return couples.reduce((acc, [a, b]) => {
        return acc + S[a - 1][b - 1] + S[b - 1][a - 1];
    }, 0)
}

const members = Array.from({ length: n }, (_, i) => i + 1);
const combinations = getCombinations(members, n / 2);
let minDiff = Infinity;

combinations.forEach((combination) => {
    const start = combination;
    const link = members.filter((member) => !start.includes(member));
    const diff = Math.abs(getPower(start) - getPower(link));
    minDiff = Math.min(diff, minDiff);
})

console.log(minDiff);

}