function solution(array, commands) {
    const results = [];
    commands.forEach((command) => {
        const [i, j, k] = command;
        const subArr = array.slice(i - 1, j);
        subArr.sort((a, b) => a - b);
        results.push(subArr[k - 1])
    })
    return results;
}