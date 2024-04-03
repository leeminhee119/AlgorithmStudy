function solution(user_id, banned_id) {
    // banned_id.sort();
    
    function isMatch(bannedId, userId) {
        if (bannedId.length !== userId.length) return false;
        return [...bannedId].every((bChar, bIdx) => bChar === userId[bIdx] || bChar === '*')
    }
    
    const bannedDictArr = banned_id.map((bannedId) => {
        const userIds = user_id.reduce((acc, userId, idx) => {
            if (isMatch(bannedId, userId)) {
                acc.push(idx);
            }
            return acc;
        }, []);
        return {userIds};
    })
    
    
    let answer = 0;
    const combs = [];
    
    function search(idx, visitedArr) {
        if (idx === bannedDictArr.length) {
            if (!combs.some((arr => arr.every((el, idx) => el === visitedArr[idx])))) {
                answer++;
                combs.push([...visitedArr]);
            }
            return;
        }
        const {userIds} = bannedDictArr[idx];
        for (let j = 0; j < userIds.length; j++) {
            const userIdx = userIds[j];
            if (visitedArr[userIdx]) continue;
            // destructure로 꺼내온 배열을 변경하면 original 객체의 배열도 변경이 되나? -> 된다.
            visitedArr[userIdx] = true;
            search(idx + 1, visitedArr);
            visitedArr[userIdx] = false;
        }
    }
    
    search(0, new Array(user_id.length).fill(false));
    
    
    // banned_id.sort();
    // let idx = 0;
    // while (idx < banned_id.length) {
    //     const lastIdx = banned_id.lastIndexOf(banned_id[idx]);
    //     if (idx === lastIdx) {
    //         idx ++;
    //         continue;
    //     }
    //     answer = answer / (lastIdx - idx + 1);
    //     idx++;
    // }
    
    return answer;
}