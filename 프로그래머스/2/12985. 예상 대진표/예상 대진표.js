function getSquare(n) {
    let sq = 0;
    while (n > 1) {
        n = n / 2
        sq++;
    }
    return sq
}

function solution(N, A, B) {
    let round = getSquare(N)
    let first = 1;
    let last = N;
    let mid = parseInt((first + last) / 2)
    while (round > 1) {
        if (!(A <= mid && B <= mid || A > mid && B > mid)) {
            break;
        }
        round --;
        if (A <= mid && B <= mid) {
            last = mid;
            mid = parseInt((first + mid) / 2);
        } else if (A > mid && B > mid) {
            first = mid;
            mid = parseInt((mid + last) / 2)
        }
        
    }
    return round;
}
