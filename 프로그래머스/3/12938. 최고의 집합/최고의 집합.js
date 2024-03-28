function solution(n, s) {
    if (n > s) return [-1];
    
    const avg = Math.floor(s / n);
    const result = Array.from({length: n}, () => avg);
    let diff = s - avg * n;
    if (diff === 0) return result;
    for (let i = n - 1; i >= 0; i--) {
        if (diff === 0) break;
        result[i]++;
        diff--;
    }
    return result;
}