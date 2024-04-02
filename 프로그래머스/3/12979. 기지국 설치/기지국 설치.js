function solution(n, stations, w) {
    let answer = 0;
    for (let i = 0; i < stations.length; i++) {
        const station = stations[i];
        let cnt1 = 0;
        if (i === 0) {
            const cntLeft = station - w - 1;
            cnt1 += cntLeft > 0 ? cntLeft : 0;
        } else if (i > 0) {
            const cntLeft = (station - w) - (stations[i - 1] + w) - 1;
            cnt1 += cntLeft > 0 ? cntLeft : 0;
        }
        let cnt2 = 0;
        if (i === stations.length - 1) {
            const cntRight = n - (station + w);
            cnt2 += cntRight > 0 ? cntRight : 0;
        }
        answer += cnt1 > 0 ? Math.ceil(cnt1 / (2 * w + 1)) : 0;
        answer += cnt2 > 0 ? Math.ceil(cnt2 / (2 * w + 1)) : 0;
    }
    return answer;
}