function solution(numbers) {
    const N = numbers.length;
    const result = Array.from({length: N}, () => -1);
    const stack = [numbers[N - 1]];
    
    for (let i = N - 2; i >= 0; i--) {
        const cur = numbers[i];
        while (stack.length && stack[stack.length - 1] <= cur) {
            stack.pop();
        }
        if (stack.length) {
            result[i] = stack[stack.length - 1];
        }
        stack.push(cur);
    }
    
    return result;
}