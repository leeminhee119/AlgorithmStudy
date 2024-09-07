function solution(weights) {
    // 곱이 양쪽이 같으면 짝꿍
    
    weights.sort((a, b) => b - a);
    // [100, 100, 180, 270, 360]
    // [360, 270, 180, 100, 100]
    
    const values = [1, 2, 3 / 2, 4 / 3];
    
    // Map에 가중치를 곱한 무게를 몇 개 있는지 누적해준다.
    // 가중치를 곱한 weights들을 순회하면서 Map에 짝꿍이 있는지 확인한다.
    
    const countMap = new Map();
    let answer = 0;
    
    weights.forEach((weight) => {
        values.map((v) => v * weight).forEach((vWeight) => {
            if (countMap.has(vWeight)) {
                answer += countMap.get(vWeight);
            }
        })
        const cntWeight = countMap.get(weight);
        countMap.set(weight, cntWeight ? cntWeight + 1 : 1);
    })

    return answer;
}