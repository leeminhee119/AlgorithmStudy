function solution(s) {
    const numbersStrArr = s.split('},{');
    const numbersArr = numbersStrArr.map((numbersStr) => {
        numbersStr = numbersStr.replace('{{', '').replace('}}', '')
        return numbersStr.split(',').map(Number);
    })
    numbersArr.sort((a, b) => a.length - b.length);
    const result = [];
    numbersArr.forEach((numbers) => {
        const targets = numbers.filter((number) => !result.includes(number));
        result.push(...targets);
    })
    return result;
}