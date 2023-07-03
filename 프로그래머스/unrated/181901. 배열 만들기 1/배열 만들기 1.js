function solution(n, k) {
    const result = [];
    for (let i = 1; i <= Math.floor(n / k); i++) {
        result.push(i * k);
    }
    return result;
}