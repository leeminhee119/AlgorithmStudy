function solution(numbers) {
    if (numbers.every(number => number === 0)) return '0'
    return numbers.sort((a, b) => {
        if (a === 0) return 1
        else if (b === 0) return -1
        else return parseInt(`${b}${a}`, 10) - parseInt(`${a}${b}`, 10)}).join('')
}