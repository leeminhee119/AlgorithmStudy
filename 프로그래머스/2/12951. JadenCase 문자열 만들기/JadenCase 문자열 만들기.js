function solution(s) {
    let newStr = ''
    for (let i = 0; i < s.length; i++) {
        if (typeof s.charAt(i) === 'number' || s.charAt(i) === ' ') {
            newStr = newStr.concat(s.charAt(i))
        } else {
            if (i === 0 || s.charAt(i - 1) === ' ') {
                newStr = newStr.concat(s.charAt(i).toUpperCase())
            } else {
                newStr = newStr.concat(s.charAt(i).toLowerCase())
            }
        }
    }
    return newStr
}