function solution(triangle) {
    if (triangle.length === 1) return triangle[0][0];
    
    const dp = [];
    dp[0] = triangle[0][0];
    dp[1] = triangle[0][0] + triangle[1][0];
    dp[2] = triangle[0][0] + triangle[1][1];
    for (let row = 2; row < triangle.length; row++) {
        for (let col = 0; col < triangle[row].length; col++) {
            const dpIdx = row * (row + 1) / 2 + col;
            const curNum = triangle[row][col]
            if (col === 0) {
                dp[dpIdx] = dp[dpIdx - row] + curNum;
                continue;
            }
            if (col === triangle[row].length - 1) {
                dp[dpIdx] = dp[dpIdx - (row + 1)] + curNum;
                continue;
            }
            const dpTopIdxLeft = (row - 1) * row / 2 + (col - 1)
            const dpTopIdxRight = (row - 1) * row / 2 + col
            dp[dpIdx] = Math.max(dp[dpTopIdxLeft] + curNum, dp[dpTopIdxRight] + curNum);
        }
    }
    const cntBottom = triangle[triangle.length - 1].length
    return Math.max(...dp.slice(-cntBottom))
}