function solution(name) {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const nameLen = name.length;
    let answer = 0;
    let minMoveCnt = nameLen - 1;
    for (let i = 0; i < nameLen; i++) {
        const alphIdx = alphabets.indexOf(name[i]);
        answer += Math.min(alphIdx, 26 - alphIdx);
        
        let nextIdxNotA = i + 1;
        while (name[nextIdxNotA] === 'A' && nextIdxNotA < nameLen) {
            nextIdxNotA++;
        }
        
        minMoveCnt = Math.min(minMoveCnt, i * 2 + nameLen - nextIdxNotA, (nameLen - nextIdxNotA) * 2 + i);
    }
    
    return answer + minMoveCnt;
    
}