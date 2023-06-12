function solution(number, k) {
    let cntK = 0;
    const stack = [];
    for (const item of number) {
        while (cntK < k && stack[stack.length - 1] < item) {
            stack.pop();
            cntK ++;
        }
        stack.push(item);
    }
    
    // 987631에 대한 예외처리 (pop이 k번만큼 다 안 되는 경우)
    while (cntK < k) {
        stack.pop();
        cntK ++;
    }
    return stack.join('');
}