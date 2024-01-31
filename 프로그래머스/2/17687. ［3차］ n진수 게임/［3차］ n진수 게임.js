function solution(n, t, m, p) {
    let sequence = '';
    const targetLength = m * (t - 1) + (p - 1);
    
    let curNumber = 0;
    while (sequence.length <= targetLength) {
        sequence += curNumber.toString(n);
        curNumber++;
    }
    sequence = sequence.toUpperCase();
    let result = '';
    const replacements = {
        
    }
    for (let i = 0; i < t; i++) {
        if (m * i + (p - 1) >= sequence.length) {
            break;
        }
        result += sequence[m * i + (p - 1)];
    }
    
    return result.slice(0, t);
}