function solution(survey, choices) {
    const scores = {}; // 각 성격 유형 8가지에 대한 점수
    
    // 각 성격유형에 대한 점수를 기록합니다.
    survey.forEach((surveyItem, idx) => {
        const score = Math.abs(choices[idx] - 4);
        if (choices[idx] - 4 < 0) { // 비동의한 경우
            if (scores[surveyItem[0]]) scores[surveyItem[0]] += score;
            else scores[surveyItem[0]] = score;
        } else if (choices[idx] - 4 > 0) { // 동의한 경우
            if (scores[surveyItem[1]]) scores[surveyItem[1]] += score;
            else scores[surveyItem[1]] = score;
        }
    })
    console.log(scores) // ex. 	{ N: 1, C: 1, M: 2, T: 3, A: 1 }
    
    const types = {
        "R": "T",
        "C": "F",
        "J": "M",
        "A": "N",
    }
    console.log(scores)
    let result = [];
    Array.from("RCJA").forEach((char) => {
        if (scores[char] && !scores[types[char]]) result.push(char);
        else if (!scores[char] && scores[types[char]]) result.push(types[char]);
        else if (!scores[char] && !scores[types[char]]) result.push(char); // 둘 다 점수가 없으면 알파벳 빠른 애로
        else if (scores[types[char]] > scores[char]) result.push(types[char]);
        else result.push(char);
    })
    return result.join('');
}