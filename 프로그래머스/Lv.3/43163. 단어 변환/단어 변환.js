function makeDict(targetWord, words, dict) {
    words.forEach((word) => {
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if (targetWord[i] !== word[i]) {
                count++;
            }
        }
        if (count === 1) {
            const arr = dict.get(targetWord);
            arr.push(word);
            dict.set(targetWord, arr)
        }
    })
}

function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }
    const dict = new Map();
    dict.set(begin, []);
    makeDict(begin, words, dict);
    words.forEach((word) => {
        dict.set(word, []);
        makeDict(word, words, dict);
    });
    
    const count = bfs(dict, begin, target);
    return count - 1;
}

function bfs(dict, begin, target) {
    const queue = [begin];
    const visited = {[begin]: 1};
    console.log(visited)
    while (queue.length) {
        const cur = queue.shift();
        for (let i = 0; i < dict.get(cur).length; i++) {
            const next = dict.get(cur)[i];
            if (!visited[next]) {
                visited[next] = visited[cur] + 1;
                queue.push(next);
                if (next === target) {
                    return visited[next];
                }
            }
        }
    }
    return;
}