function solution(n) {
    const numbers = ['1', '2', '4'];
    let str = '';
    
    while (n > 0) {
        n--;
        const rem = n % 3;
        str = numbers[rem] + str;
        n = Math.floor(n / 3);
    }
    
    return str;
}