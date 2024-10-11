function solution(sequence, k) {
    let s = 0;
    let e = 0;
    let sum = sequence[0];
    const answers = [];
    while (sequence[e]) {
        if (sum === k) {
            answers.push([s, e]);
            e++;
            if (sequence[e]) {
                sum += sequence[e];    
            }
        }
        if (sum > k) {
            sum -= sequence[s];
            s++;
        } else {
            e++;
            if (sequence[e]) {
                sum += sequence[e];    
            }
        }
    }
    console.log(answers)
    return answers.reduce((acc, cur) => (cur[1] - cur[0]) < (acc[1] - acc[0]) ? cur : acc , answers[0]);
}