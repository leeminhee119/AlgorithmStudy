function solution(brown, yellow) {
    const answer = [];
    const sum = brown + yellow;
    for (let i = 3; i < sum; i++) {
        const j = sum / i;
        if ((i - 2 + j - 2) * 2 + 4 === brown) {
            answer.push(Math.max(i, j))
            answer.push(Math.min(i, j))
            break;
        }
    }
    return answer;
}