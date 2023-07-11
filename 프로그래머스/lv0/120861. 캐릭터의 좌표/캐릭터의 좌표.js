function solution(keyinput, board) {
    const directions = {
        'left': [-1, 0],
        'right': [1, 0],
        'up': [0, 1],
        'down': [0, -1]
    }
    const pos = [0, 0]
    const borderX = Math.floor(board[0] / 2);
    const borderY = Math.floor(board[1] / 2);
    console.log(borderX, borderY)
    
    keyinput.forEach((key) => {
        const newX = pos[0] + directions[key][0];
        const newY = pos[1] + directions[key][1];
        if (newX <= borderX && newX >= -borderX && newY <= borderY && newY >= -borderY) {
            pos[0] = newX;
            pos[1] = newY;
        }
    })
    return pos;
}