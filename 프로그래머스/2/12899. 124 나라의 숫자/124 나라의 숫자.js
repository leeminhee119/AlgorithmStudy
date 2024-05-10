function solution(n) {
    const NUMBERS = ['1', '2', '4'];
    let string = '';
    while (n > 0) {
        n--;
        string += NUMBERS[n % 3];
        n = parseInt(n / 3);
    }
    return Array.from(string).reverse().join('');
}