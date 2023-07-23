function solution(id_list, report, k) {
    const result = new Array(id_list.length).fill(0);
    // { 신고 당한 이용자: [신고한 이용자들] }
    const reportObject = report.reduce((accObject, curString) => {
        const [reporter, reportTarget] = curString.split(' ')
        if (typeof accObject[reportTarget] !== 'object') {
            accObject[reportTarget] = [reporter];
        }
        // 이미 신고한 사람이 아니라면 (원소로 존재하지 않는다면)
        if (accObject[reportTarget].indexOf(reporter) === -1) {
            accObject[reportTarget].push(reporter)
        }
        
        return accObject;
    }, {})
    
    for (reportTarget in reportObject) {
        const reporters = reportObject[reportTarget]
        if (reporters.length >= k) {
            // 신고한 이용자들 각각의 결과 메일 수를 +1
            reporters.forEach(reporter => {
                // 해당 이용자의 인덱스 값을 찾아 +1
                const idIndex = id_list.indexOf(reporter)
                result[idIndex]++;
            })
        }
    }
    return result;
}