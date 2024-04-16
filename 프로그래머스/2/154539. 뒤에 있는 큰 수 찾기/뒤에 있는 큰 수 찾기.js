function solution(numbers) {
    const answer = Array.from({length: numbers.length}, () => -1);
    const stack = [];
    for (let i = 0; i < numbers.length; i++) {
        while (numbers[stack[stack.length - 1]] < numbers[i]) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    return answer;
}