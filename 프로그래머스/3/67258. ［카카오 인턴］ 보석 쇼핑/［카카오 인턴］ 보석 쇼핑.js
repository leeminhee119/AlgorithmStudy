function solution(gems) {
    const uniqueGemCnt = new Set(gems).size;
    const gemsMap = new Map();
    let answer = [1, gems.length];
    gems.forEach((gem, i) => {
        gemsMap.delete(gem);
        gemsMap.set(gem, i + 1);
        if (gemsMap.size === uniqueGemCnt) {
            const cand = [gemsMap.values().next().value, i + 1];
            answer = answer[1] - answer[0] > cand[1] - cand[0] ? cand : answer;
        }
    })
    return answer;
}