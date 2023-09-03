function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    if (begin === target) return 0;
    
    words.unshift(begin);
    const wordLength = begin.length;
    const initGraph = words.reduce((obj, word) => {
        obj[word] = [];
        return obj;
    }, {})
    const graph = words.reduce((obj, word, wordIndex) => {
        const otherWords = words.slice(wordIndex + 1);
        const otherWordsLength = otherWords.length;
        for (let i = 0; i < otherWordsLength; i++) {
            const otherWord = otherWords[i];
            let countDiff = 0;
            for (let j = 0; j < wordLength; j++) {
                if (otherWord[j] !== word[j]) countDiff++;
                if (countDiff > 1) {
                    break;
                } else if (j === wordLength - 1) {
                    if (otherWord !== begin) obj[word].push(otherWord);
                    if (word !== begin) obj[otherWord].push(word);  
                }
            }
        }
        return obj;
    }, initGraph)
    
    const visited = { [begin]: 0 };
    const queue = [begin];
    
    while (queue.length) {
        const cur = queue.shift();
        if (cur === target) {
            break;
        }
        for (const word of graph[cur]) {
            if (!visited[word]) {
                visited[word] = visited[cur] + 1;
                queue.push(word);
            }
        }
    }
    return visited[target] ? visited[target] : 0;
}