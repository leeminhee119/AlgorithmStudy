function combination(arr, r) {
    if (r === 1) return arr.map((el) => [el]);
    const result = [];
    arr.forEach((fixed, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const comb = combination(rest, r - 1);
        const attached = comb.map((els) => [fixed, ...els]);
        result.push(...attached);
    })
    return result;
}

function permutation(arr, r) {
    if (r === 1) return arr.map((el) => [el]);
    const result = [];
    arr.forEach((fixed, idx, origin) => {
        const rest = origin;
        const per = permutation(rest, r - 1);
        const attached = per.map((els) => [fixed, ...els]);
        result.push(...attached);
    })
    return result;
}

function solution(word) {
    const length = word.length;
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    
    const words = [];
    for (let j = 1; j <= vowels.length; j++) {
        words.push(...permutation(vowels, j));
    }
    
    const dictionary = words.map((arr) => arr.join('')).sort();
    
    return dictionary.indexOf(word) + 1;
}