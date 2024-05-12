function solution(storey) {
    let answer = 0;
    while (storey > 0) {
        const num = storey % 10;
        storey = parseInt(storey / 10);
        if (num > 5) {
            answer += 10 - num;
            storey ++;
        }
        if (num < 5) {
            answer += num;
        }
        if (num === 5) {
            const nextNum = storey % 10;
            if (nextNum >= 5) {
                storey ++;
            }
            answer += 5;
        }
    }
    return answer;
}