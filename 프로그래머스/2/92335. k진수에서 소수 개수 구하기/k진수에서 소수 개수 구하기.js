function solution(n, k) {
    function isPrime(number) {
        if (number === 1) {
            return false;
        }
        if (number === 2) {
            return true;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
    const numbers = n.toString(k).split(/0+/g).filter(el => el).map(Number);
    let result = 0;
    numbers.forEach((number) => {
        if (isPrime(number)) {
            result++;
        }
    })
    return result;
}