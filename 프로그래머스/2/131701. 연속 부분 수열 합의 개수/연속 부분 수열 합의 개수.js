function solution(elements) {
    const doubleElements = elements.concat(elements);
    const sums = [];
    for (let k = 1; k <= elements.length; k++) {
        for (let i = 0; i < elements.length; i++) {
            sums.push(doubleElements.slice(i, i + k).reduce((acc, cur) => acc + cur, 0))
        }
    }
    const sumsSet = new Set(sums)
    return sumsSet.size
}