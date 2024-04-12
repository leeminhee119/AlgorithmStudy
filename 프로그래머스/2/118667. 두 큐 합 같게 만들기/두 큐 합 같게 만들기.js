function solution(queue1, queue2) {
    let queue1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
    let queue2Sum = queue2.reduce((acc, cur) => acc + cur, 0);
    const limit = queue1.length + queue2.length;
    let queue1Idx = 0;
    let queue2Idx = 0;
    let answer = -1;
    
    while (queue1Idx < limit && queue2Idx < limit) {
        if (queue1Sum === queue2Sum) {
            answer = queue1Idx + queue2Idx;
            break;
        }
        if (queue1Sum > queue2Sum) {
            queue1Sum -= queue1[queue1Idx];
            queue2Sum += queue1[queue1Idx];
            queue2.push(queue1[queue1Idx]);
            queue1Idx ++;
        } else {
            queue2Sum -= queue2[queue2Idx];
            queue1Sum += queue2[queue2Idx];
            queue1.push(queue2[queue2Idx]);
            queue2Idx ++;
        }
    }
    
    return answer;
}