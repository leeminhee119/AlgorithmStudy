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
function sum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}
function solution(number) {
    return getCombinationArrs(number, 3).reduce((acc, combArr) => sum(combArr) === 0 ? acc + 1 : acc, 0)
}