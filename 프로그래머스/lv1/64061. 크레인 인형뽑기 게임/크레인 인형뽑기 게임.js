function solution(board, moves) {
    const cols = Array.from(Array(board.length), () => new Array())
    board.forEach(row => {
        row.forEach((item, colIdx) => {
            if (item !== 0) {
                cols[colIdx].unshift(item);
            }
        })
    })
    
    let cnt = 0;
    const stack = [];
    moves.forEach(move => {
        if (cols[move - 1].length > 0) {
            const targetItem = cols[move - 1].pop();
            if (targetItem !== stack[stack.length - 1]) stack.push(targetItem);
            else {
                stack.pop();
                cnt += 2;
            }
        }
    })
    return cnt;
}