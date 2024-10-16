function solution(weights) {
    let answer = 0;
    weights.sort((a, b) => a - b);
    const ratios = [1, 4/3, 3/2, 2];
    const counts = Array.from({length: 4000 + 1}, () => 0);
    for (const weight of weights) {
        answer += counts[weight];
        for (const ratio of ratios) {
            const ww = ratio * weight;
            if (Math.floor(ww) !== ww) continue;
            counts[ww]++;
        }
    }
    return answer;
}