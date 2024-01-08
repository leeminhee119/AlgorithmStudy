function solution(n, left, right) {
    const oneDimArr = [];
    const startRow = parseInt(left / n) + 1;
    const startCol = left % n + 1;
    const endRow = parseInt(right / n) + 1;
    const endCol = right % n + 1;
    
    for (let row = startRow; row <= endRow; row++) {
        for (let col = 1; col <= n; col++) {
            if (row === startRow && col < startCol || row === endRow && col > endCol) continue;
            oneDimArr.push(col <= row ? row : col);
        }
    }
    return oneDimArr;
}