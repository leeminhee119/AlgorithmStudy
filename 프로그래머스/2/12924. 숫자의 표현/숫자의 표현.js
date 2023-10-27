function solution(n) {
    let count = 0;
    for (let i = 1; i <= n / 2; i++) {
        let sum = i;
        let j = i + 1;
        while (sum <= n) {
            if (sum === n) count++;
            sum += j;
            j++;
        }
    }
    return count + 1;
}