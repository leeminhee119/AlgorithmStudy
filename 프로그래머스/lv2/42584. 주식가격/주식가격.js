function solution(prices) {
    const answer = []
    const pricesLength = prices.length
    for (let i = 0; i < pricesLength; i++) {
        let cnt = 0
        for (let j = i + 1; j < pricesLength; j++) {
            cnt ++
            if (prices[i] > prices[j]) break
        }
        answer.push(cnt)
    }
    return answer
}