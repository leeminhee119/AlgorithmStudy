function solution(s) {
    const stack = []
    const stringLength = s.length
    for (let i = 0; i < stringLength; i++) {
        const char = s[i]
        if (char == "(") {
            stack.push(char)
        } else {
            if (stack.length > 0) stack.pop()
            else return false
        }
    }
    return (stack.length > 0 ? false : true)
}