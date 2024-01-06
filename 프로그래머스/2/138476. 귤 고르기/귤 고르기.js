function solution(k, tangerine) {
    const cntTypeMap = new Map();
    tangerine.forEach((size) => {
        cntTypeMap.set(size, cntTypeMap.get(size) ? cntTypeMap.get(size) + 1 : 1)
    })
    const cntTypeArr = [...cntTypeMap].sort((a, b) => b[1] - a[1]);
    let curSum = 0;
    let answer = 0;
    for (let i = 0; i < cntTypeArr.length; i++) {
        curSum += cntTypeArr[i][1];
        answer++;
        if (curSum >= k) break;
    }
    return answer;
}