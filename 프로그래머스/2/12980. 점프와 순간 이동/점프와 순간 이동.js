function solution(n) {
    let k = 1;
    while (n > 1) {
        if (n % 2 === 1) {
            k++;
        }
        n = parseInt(n / 2)
    }
    return k;
}