function solution(n, works) {
    if (works.reduce((acc, cur) => acc + cur, 0) <= n) return 0;
    
    works.sort((a, b) => b - a);
    let maxIdx = 0;
    while (n) {
        if (works[maxIdx] < works[maxIdx + 1]) {
            maxIdx++;
            continue;
        }
        if (maxIdx && works[maxIdx - 1] === works[maxIdx]) {
            maxIdx--;
            continue;
        }
        works[maxIdx]--;
        n--;
    }
    return works.reduce((acc, cur) => acc + cur ** 2, 0);
}