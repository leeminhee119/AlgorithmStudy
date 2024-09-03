function solution(book_time) {
    function getMinutes(timeString) {
        const [h, m] = timeString.split(':').map(Number);
        return h * 60 + m;
    }
    // 퇴실 후 10분까지 포함, 단위: 분
    const occupied_time = book_time.map(([start, end]) => [getMinutes(start), getMinutes(end) + 10]);
    
    // 방의 개수가 최소여야 함
    // 
    // 모든 방을 순회하며 종료 시각이 시작 시각보다 이전이면 그 방을 갱신 (마지막 종료시간을 담은 일차원 배열)

    // 시간복잡도 O(N^2)
    
    occupied_time.sort((a, b) => a[0] - b[0]);
    
    const rooms = [];
    occupied_time.forEach(([start, end]) => {
        // let isJoined = false;
        // for (let i = 0; i < rooms.length; i++) {
        //     if (rooms[i][1] <= start) {
        //         rooms[i] = [start, end];
        //         isJoined = true;
        //     }
        // }
        // if (!isJoined) {
        //     rooms.push([start, end]);
        // }
        // rooms.sort((a, b) => b[1] - a[1]);
        const idx = rooms.findIndex((roomEnd) => roomEnd <= start);
        if (idx < 0) {
            rooms.push(end);
        } else {
            rooms[idx] = end;
        }
    })
    
    return rooms.length;
}