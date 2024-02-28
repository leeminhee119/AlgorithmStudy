function solution(numbers) {
    const result = [];
    numbers.forEach((number) => {
        if (number % 2 === 0) {
            result.push(number + 1);
            return;
        }
        const biNumber = number.toString(2);
        const lastIndexOf0 = biNumber.lastIndexOf(0);
        result.push(parseInt(biNumber.substring(0, lastIndexOf0) + '10' + biNumber.substring(lastIndexOf0 + 2), 2));
    })
    return result;
}