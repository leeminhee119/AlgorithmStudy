function permutate(arr, r) {
    const result = [];
    
    if (r === 1) {
        return arr.map((el) => [el]);
    }
    arr.forEach((fixed, idx, origin) => {
        const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
        const permutations = permutate(rest, r - 1);
        const attached = permutations.map((els) => [fixed, ...els]);
        result.push(...attached);
    })
    return result;
}

function solution(k, dungeons) {
    const permutations = permutate(dungeons, dungeons.length);
    
    let maxCnt = 0;
    permutations.forEach((permutation) => {
        let count = 0;
        let remain = k;
        for (let i = 0; i < permutation.length; i++) {
            const [min, d] = permutation[i];
            if (remain >= min) {
                remain -= d;
                count++;
            }
        }
        if (count > maxCnt) {
            maxCnt = count;
        }
    })
    
    return maxCnt;
}