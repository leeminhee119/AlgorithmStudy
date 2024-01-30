function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const couplesA = [];
    const couplesB = [];
    
    str1.split('').forEach((char, charIdx) => {
        const couple = char + str1[charIdx + 1];
        if (/[^a-z]/g.exec(couple) || charIdx === str1.length - 1) {
            return;
        }
        couplesA.push(char + str1[charIdx + 1]);
    })
    
    str2.split('').forEach((char, charIdx) => {
        const couple = char + str2[charIdx + 1];
        if (/[^a-z]/g.exec(couple) || charIdx === str2.length - 1) {
            return;
        }
        couplesB.push(char + str2[charIdx + 1]);
    })
    
    if (couplesA.length === 0 && couplesB.length === 0) {
        return 65536;
    }
    
    const common = Array.from(new Set(couplesA.filter((couple) => couplesB.includes(couple))));
  
    let sumMin = 0;
    let sumMax = 0;
    
    common.forEach((commonChar) => {
        const cntA = couplesA.filter((char) => char === commonChar).length;
        const cntB = couplesB.filter((char) => char === commonChar).length;
        sumMin += Math.min(cntA, cntB);
        sumMax += Math.max(cntA, cntB);
    })
    
    const ILength = sumMin;
    const ULength = sumMax + couplesA.filter((el) => !common.includes(el)).length + couplesB.filter((el) => !common.includes(el)).length;
    return parseInt(ILength / ULength * 65536);
    
}