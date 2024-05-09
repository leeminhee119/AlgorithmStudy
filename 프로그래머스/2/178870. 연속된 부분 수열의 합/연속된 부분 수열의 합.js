function solution(sequence, k) {
    let ansS = 0;
    let ansE = 0;
    const LEN = sequence.length;
    let sum = 0;
    
    let s = 0;
    let e = 0;
    let minLength = LEN;
    for (let i = 0; i < LEN; i++) {
        s = i;
        while (sum < k && e < LEN) {
            sum += sequence[e++];
        }
        if (sum === k) {
            if ((e - 1 - s) < minLength) {
                ansS = s;
                ansE = e - 1;
                minLength = e - 1 - s;
            }
        }
        sum -= sequence[i];
    }
    
    return [ansS, ansE];
}