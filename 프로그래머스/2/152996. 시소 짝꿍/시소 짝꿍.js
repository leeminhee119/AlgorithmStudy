function solution(weights) {
    const ratios = [1, 2, 3 / 2, 4 / 3];
    const valueMap = new Map();
    let answer = 0;
    weights.sort((a, b) => b - a).forEach((weight) => {
        ratios.map((ratio) => weight * ratio).forEach((value) => {
            if (valueMap.has(value)) {
                answer += valueMap.get(value);
            }
        })
        valueMap.set(weight, valueMap.get(weight) ? valueMap.get(weight) + 1 : 1);
    })
    return answer;
}