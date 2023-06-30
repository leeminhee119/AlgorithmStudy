function getCombinationArrs(arr, cnt) {
    if (cnt === 1) return arr.map(number => [number]);
    const results = [];
    arr.forEach((number, idx) => {
        const rest = arr.slice(idx + 1);
        const attachedArrs = getCombinationArrs(rest, cnt - 1).map(restArr => [number, ...restArr]);
        results.push(...attachedArrs);
    })
    return results;
}
function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    return true;
}
function getSum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}
function solution(nums) {
    return getCombinationArrs(nums, 3).reduce((acc, curArr) => isPrime(getSum(curArr)) ? acc + 1 : acc, 0);
}