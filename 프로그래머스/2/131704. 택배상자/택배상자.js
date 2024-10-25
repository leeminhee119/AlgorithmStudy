function solution(order) {
    // 4-3-1-2-5
    
    const n = order.length;
    const stack = [];
    
    let result = 0;
    let top = 1;
    let ni = 0;
    
    while (top <= n) {
        const next = order[ni];
        if (top === next) {
            top++;
            result++;
            ni++;
            continue;
        }
        if (stack.length && stack[stack.length - 1] === next) {
            stack.pop();
            result++;
            ni++;
            continue;
        }
        stack.push(top);
        top++;
    }
    while (ni <= n && stack.length && stack[stack.length - 1] === order[ni]) {
        stack.pop();
        result++;
        ni++;
    }
    return result;
}