function solution(queue1, queue2) {
    const len = queue1.length;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    let sIdx1 = 0;
    let sIdx2 = 0;
    let answer = -1;
    
    const limit = queue1.length + queue2.length;
    while (sIdx1 < limit && sIdx2 < limit) {
        if (sum1 === sum2) {
            answer = sIdx1 + sIdx2;
            break;
        }
        if (sum1 > sum2) {
            const target = queue1[sIdx1];
            queue2.push(target);
            sum1 -= target;
            sum2 += target;
            sIdx1++;
        } else {
            const target = queue2[sIdx2];
            queue1.push(target);
            sum1 += target;
            sum2 -= target;
            sIdx2++;
        }
    }
    return answer;
}