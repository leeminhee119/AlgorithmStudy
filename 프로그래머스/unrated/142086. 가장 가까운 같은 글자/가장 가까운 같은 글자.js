function solution(s) {
    const distances = [] // 각각 몇 칸 앞에 있는지 담을 배열
    
    // 왼쪽부터 오른쪽으로 순차적으로 순회한다.
    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i] // 현재 순회 중인 문자
        let isFirstChar = true; // 처음 나온 문자인지 확인하는 플래그
        
        // i 이전 인덱스부터 첫 번째 인덱스 0까지 거꾸로 순회한다.
        for (let j = i - 1; j >= 0; j--) {
            const targetChar = s[j] // 현재 순회 중인 문자
            
            // 같은 문자가 나타나면, i와 j의 차이를 distances 배열에 삽입한다.
            if (currentChar === targetChar) {
                distances.push(i - j)
                isFirstChar = false;
                break;
            }
        }
        if (isFirstChar) distances.push(-1)
    }
    
    return distances
}