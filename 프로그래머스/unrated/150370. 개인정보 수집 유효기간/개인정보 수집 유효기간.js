function solution(today, terms, privacies) {
    const termsMap = terms.reduce((obj, term) => {
        const [termType, termDuration] = term.split(' ')
        obj[termType] = +termDuration
        return obj
    }, {}) // { A: 6, B: 12, C: 3 }
    
    const result = [];
    privacies.forEach((privacy, index) => {
        const [startDate, termType] = privacy.split(' ')
        const [startY, startM, startD] = startDate.split('.').map(str => +str)
        const sumMonth = startM + termsMap[termType] - (startD === 1 ? 1 : 0) // 시작 달 + 유효기간
        const expireY = startY + (sumMonth % 12 === 0 ? parseInt(sumMonth / 12) - 1 : parseInt(sumMonth / 12))
        const expireM = sumMonth % 12 || 12
        const expireD = startD === 1 ? 28 : startD - 1
        if (new Date(today) > new Date(`${expireY}.${expireM}.${expireD}`)) result.push(index + 1)
    })
    return result
}