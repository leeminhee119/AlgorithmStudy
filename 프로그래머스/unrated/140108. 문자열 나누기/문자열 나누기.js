function iterateString(s, result) {
    const x = s[0];
    let countX = 1;
    let countOthers = 0;

    for (let i = 1; i < s.length; i++) {
        s[i] === x ? countX++ : countOthers++;

        if (countX === countOthers) {
            if (i === s.length - 1) return ++ result;
            return iterateString(s.slice(i + 1), ++ result)
        }
    }
    return ++ result; // 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없을 때, 역시 분리
}
    
function solution(s) {
    return iterateString(s, 0)
}