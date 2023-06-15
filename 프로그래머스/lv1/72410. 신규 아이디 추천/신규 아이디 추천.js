function solution(new_id) {
    let answer = new_id.toLowerCase(); // 1
    answer = answer.replace(/[^a-z0-9-_.]/g, "")
        .replace(/\.{2,}/g, ".")
        .replace(/^\.|\.$/g, "");
    if (answer === "") answer = 'a';
    answer = answer.slice(0, 15) // 문자열 길이가 16자보다 적으면 전부 반환합니다.
        .replace(/\.$/g, "");
    while (answer.length <= 2) {
        answer = answer.concat(answer[answer.length - 1]);
    }
    return answer;
}