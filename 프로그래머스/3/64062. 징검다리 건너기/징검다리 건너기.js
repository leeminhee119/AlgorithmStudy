function solution(stones, k) {
    function searchCntMembers(l, r, stones) {
        if (l > r) {
            return r;
        }
        const mid = Math.floor((l + r) / 2);
        
        let count = 0;
        for (let i = 0; i < stones.length; i++) {
            if (count === k) {
                break;
            }
            count = stones[i] - (mid - 1) <= 0 ? count + 1 : 0;
        }
        if (count === k) {
            return searchCntMembers(l, mid - 1, stones);
        } else {
            return searchCntMembers(mid + 1, r, stones);
        }
    }
    
    return searchCntMembers(1, 200000000, stones);
}