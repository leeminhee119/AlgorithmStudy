function solution(n, times) {
    let l = 1;
    let r = 1000000000 * 1000000000
    let answer;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        
        let cntAvailable = 0;
        for (let i = 0; i < times.length; i++) {
            if (cntAvailable >= n) {
                break;
            }
            cntAvailable += Math.floor(mid / times[i]);
        }
        if (cntAvailable >= n) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}