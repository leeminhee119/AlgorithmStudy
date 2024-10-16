function solution(storey) {
    let answer = 0;
    
    
    while (storey > 0) {
        const cur = storey % 10; // 맨끝자리 수
        if (cur > 5) {
            answer += (10 - cur);
            storey += (10 - cur);
        } else if (cur < 5) {
            answer += cur;
            storey -= cur;
        } else {
            if (Math.floor(storey / 10) % 10 >= 5) {
                answer += 5;
                storey += 5;
            } else {
                answer += 5;
                storey -= 5;
            }
        }
        storey = Math.floor(storey / 10);
    }
    
    return answer;
}