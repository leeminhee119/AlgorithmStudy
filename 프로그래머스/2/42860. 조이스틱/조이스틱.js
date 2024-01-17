function solution(name) {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let answer = 0;
    let minMove = name.length - 1;
    for (let i = name.length - 1; i >= 0; i--) {
        if (name[i] !== 'A') {
            minMove = i;
            break;
        }
    }
    [...name].forEach((char, i) => {
        const alphIndex = alphabets.indexOf(char);
        if (alphIndex !== 0 && alphIndex < 13) {
            answer += alphIndex; 
        } else if (alphIndex !== 0 && alphIndex >= 13) {
            answer += (26 - alphIndex);
        }
        
        let nextIndex = i + 1;
        
        while (nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }
        minMove = Math.min(minMove, i * 2 + name.length - nextIndex, 2 * (name.length - nextIndex) + i);
    })
    answer += minMove;
    console.log(minMove, answer - minMove)
    return answer;
}