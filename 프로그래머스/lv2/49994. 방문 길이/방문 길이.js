function solution(dirs) {
    const directions = {
        'U': [0, 1],
        'D': [0, -1],
        'L': [-1, 0],
        'R': [1, 0]
    }
    const maxX = 5;
    const maxY = 5;
    let pos = [0, 0];
    const visited = []; // 지나간 경로를 문자열로 저장 (출발x출발y도착x도착y)
    dirs.split('').forEach((dir) => {
        // 명령어에 따른 다음 좌표
        const tempX = pos[0] + directions[dir][0];
        const tempY = pos[1] + directions[dir][1];
        
        // 범위를 벗어나지 않는다면 pos 위치를 다음 좌표로 이동시킨다.
        // 방향은 무관
        if (tempX <= maxX && tempX >= -maxX && tempY <= maxY && tempY >= -maxY) {
            visited.push(`${pos[0]}${pos[1]}${tempX}${tempY}`);
            visited.push(`${tempX}${tempY}${pos[0]}${pos[1]}`);
            pos[0] = tempX;
            pos[1] = tempY;
        }
    })
    return new Set(visited).size / 2; // 처음 가본 길만 포함하므로 중복을 제거한다.
}