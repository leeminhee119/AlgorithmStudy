function solution(prices) {
    // 나보다 작으면서 나와 가장 가까운 값
    // 각각 인덱스 끝까지 봐야 통과 여부를 알 수 있음
    // 근데 그러면 O(N^2), 시간초과
    // 나보다 작으면서 나와 가장 가까운 값
    // ex. 4 5 6 3 의 경우, 4, 5, 6은 모두 3 ("증가하는 동안")
    // 특정 구간이 싹 다 어떤 조건을 만족한다.. 스택 O(N)
    
    // '작은 수'가 기준이 되어 순회하기
    
    const result = Array.from({ length: prices.length }, (_, i) => prices.length - i - 1);
    const stack = [];
    prices.forEach((price, idx) => {
        while (!!stack.length && price < stack[stack.length - 1][0]) {
            const [top, topIdx] = stack.pop();
            result[topIdx] = idx - topIdx;
        }
        
        stack.push([price, idx]);
    })
    
    return result;
}