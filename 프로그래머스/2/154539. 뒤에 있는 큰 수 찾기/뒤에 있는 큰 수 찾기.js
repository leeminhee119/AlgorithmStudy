function solution(numbers) {
    const result = Array.from({ length: numbers.length }, () => -1);
    const stack = [];
    numbers.forEach((num, idx) => {
        // 현재 숫자가 스택의 top보다 크다면
        while (stack.length && num > stack[stack.length - 1][0]) {
            const [top, topIdx] = stack.pop();
            result[topIdx] = num;
        }
        
        stack.push([num, idx]);
    })
    return result;
}