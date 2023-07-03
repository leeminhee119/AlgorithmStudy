function getPermutationArrs(numArr, selectedNumber) {
    const result = [];
    if (selectedNumber === 1) return numArr.map(num => [num]);
    numArr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutationArrs(rest, selectedNumber - 1);
        const attached = permutations.map((permutation) => {
            // if (+(permutation[permutation.length - 1]) % 2 === 0) return null;
            return [fixed, ...permutation].join('')
        });
        result.push(...attached);
    })
    return result;
}

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function solution(numbers) {
    const numArr = numbers.split('')
    const permutationArr = []
    for (let i = 1; i <= numArr.length; i++) {
        permutationArr.push(...getPermutationArrs(numArr, i).map(str => +str))
    }
    const setPermutationArr = [...new Set(permutationArr)]
    return setPermutationArr.reduce((acc, number) => isPrime(number) ? acc + 1 : acc, 0)
}