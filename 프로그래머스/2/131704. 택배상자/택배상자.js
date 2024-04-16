function solution(order) {
    const boxes = order.length;
    const stack = [];
    let targetIdx = 0;
    let answer = 0;
    let curBox = 1;
    while (curBox <= boxes) {
        const targetBox = order[targetIdx];
        if (curBox === targetBox) {
            answer++;
            targetIdx++;
            curBox++;
            continue;
        }
        if (stack.length === 0 || stack[stack.length - 1] < targetBox) {
            stack.push(curBox);
            curBox++;
            continue;
        }
        if (stack[stack.length - 1] === targetBox) {
            stack.pop();
            answer++;
            targetIdx++;
        } else if (stack[stack.length - 1] > targetBox) {
            break;
        }
    }
    while (stack.length && stack[stack.length - 1] === order[targetIdx]) {
        targetIdx++;
        stack.pop();
        answer++;
    }
    return answer;
}