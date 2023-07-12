function solution(park, routes) {
    const directions = {
        'E': [0, 1],
        'W': [0, -1],
        'S': [1, 0],
        'N': [-1, 0]
    }
    let posRow = park.findIndex(row => row.includes('S'));
    let posCol = park[posRow].indexOf('S');
    const sizeRow = park.length;
    const sizeCol = park[0].length;
    routes.forEach((route) => {
        let tempRow = posRow;
        let tempCol = posCol;
        let canMove = true;
        const [op, n] = route.split(' ')
        
        // n만큼 한 칸씩 이동하면서 확인 (장애물, 범위)
        for (let i = 0; i < parseInt(n); i++) {
            tempRow += directions[op][0];
            tempCol += directions[op][1];
            if (tempRow < sizeRow && tempRow >= 0 && tempCol < sizeCol && tempCol >= 0 && park[tempRow][tempCol] !== 'X') {
                continue;
            } else {
                canMove = false;
                break;
            }
        }
        if (canMove) {
            posRow = tempRow;
            posCol = tempCol;
        }
    })
    return [posRow, posCol];
}