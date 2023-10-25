function solution(s) {
    let countConvert = 0;
    let count0 = 0;
    while (s !== "1") {
        countConvert++;
        let filteredS = ''
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0') count0++;
            else filteredS = filteredS.concat(s[i])
        }
        s = filteredS.length.toString(2)
    }
    return [countConvert, count0]
}