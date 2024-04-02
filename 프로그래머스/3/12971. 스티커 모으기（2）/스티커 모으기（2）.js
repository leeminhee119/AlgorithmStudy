function solution(sticker) {
    if (sticker.length <= 2) return Math.max(...sticker);
    
    const dp1 = new Array(sticker.length + 2).fill(0);
    const dp2 = new Array(sticker.length + 2).fill(0);
    
    for (let i = 2; i < sticker.length + 2 - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);
    }
    for (let i = 3; i < sticker.length + 2; i++) {
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i - 2]);
    }
    return Math.max(Math.max(...dp1), Math.max(...dp2));
}