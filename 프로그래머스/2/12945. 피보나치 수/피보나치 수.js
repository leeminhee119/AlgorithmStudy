function fibo(n) {
    const fibos = [0, 1]
    for (let i = 2; i < n + 1; i++) {
        fibos[i] = fibos[i - 1] % 1234567 + fibos[i - 2] % 1234567
    }
    return fibos[n]
}

function solution(n) {
    return fibo(n) % 1234567
}