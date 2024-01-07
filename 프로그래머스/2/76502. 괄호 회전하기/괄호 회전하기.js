function solution(s) {
    const bracketDic = {
        ']': '[',
        '}': '{',
        ')': '('
    }
    const dupS = s.concat(s)
    const leftBrackets = Object.values(bracketDic)
    const rightBrackets = Object.keys(bracketDic)
    let count = 0;
    for (let x = 0; x < s.length; x++) {
        const stack = []
        let isCorrect = true
        for (let i = x; i < x + s.length; i++) {
            if (leftBrackets.includes(dupS[i])) {
                stack.push(dupS[i])
            } else {
                const curBracket = stack.pop()
                if (!curBracket || curBracket !== bracketDic[dupS[i]]) {
                    isCorrect = false
                    break
                }
            }
        }
        if (stack.length > 0) isCorrect = false
        if (isCorrect) count++
    }
    return count
}