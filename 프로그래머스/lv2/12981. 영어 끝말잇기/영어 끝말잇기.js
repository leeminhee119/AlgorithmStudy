function solution(n, words) {
    const wordsLength = words.length
    let failIndex = -1
    for (let i = 1; i < wordsLength; i++) {
        if (words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
            failIndex = i;
            break;
        } else if (words.slice(0, i - 1).includes(words[i])) {
            failIndex = i;
            break;
        }
    }
    if (failIndex === -1) {
        return [0, 0]
    } else {
        const failNumber = (failIndex + 1) % n > 0 ? (failIndex + 1) % n : n
        return [failNumber , parseInt(failIndex / n) + 1]
    }
}