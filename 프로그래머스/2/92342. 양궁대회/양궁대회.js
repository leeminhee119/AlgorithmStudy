function solution(n, info) {
    // k점에 더 많이 맞힌 선수가 k점 가져감
    // 동일 개수를 맞힌 경우 어피치가 가져감
    // 아무도 안 맞힌 경우 안 가져감
    
    // 가장 낮은 점수를 더 많이 맞힌 경우
    // 가장 큰 점수차로 이기기 위해 각 점수에 몇발을 쏴야할까?
    let result = new Array(11).fill(0); // 0 ~ 10
    let maxDiff = 0;
    
    // k점에 쏘거나, 안 쏘거나 -> O(2^n)
    
    function backtrack(index, ryanInfo, rem) {
        if (index < 11 && rem < 0) {
            return;
        }
        if (index === 11) {
            if (rem < 0) {
                rem += info[10] + 1;
                ryanInfo[10] = rem;
            }
            const diff = getDiff(info, ryanInfo);
            if (diff > maxDiff) {
                maxDiff = diff;
                result = [...ryanInfo];
                return;
            } else if (diff === maxDiff) {
                for (let i = 10; i >= 0; i--) {
                    if (ryanInfo[i] < result[i]) {
                        break;
                    } else if (result[i] < ryanInfo[i]) {
                        result = [...ryanInfo];
                        break;
                    }
                }
            }
        }
        for (let i = index; i <= 10; i++) {
            const score = 10 - i;
            ryanInfo[i] = info[i] + 1;
            backtrack(i + 1, ryanInfo, rem - (info[i] + 1));
            ryanInfo[i] = 0;
        }
    }
    
    function getDiff(pInfo, rInfo) {
        let rScore = 0;
        let pScore = 0;
        for (let i = 0; i < 11; i++) {
            const [r, p] = [rInfo[i], pInfo[i]];
            
            if (r === 0 && p === 0) {
                continue;
            }
            if (r > p) {
                rScore += 10 - i;
            } else {
                pScore += 10 - i;
            }
        }
        return rScore - pScore;
    }
    
    backtrack(0, result, n);
    return maxDiff ? result : [-1];
}