function solution(book_time) {
    function getMinutes(time) {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    }
    const sortedBookTime = book_time.map(([s, e]) => [getMinutes(s), getMinutes(e)]).sort((a, b) => a[1] - b[1]);
    const sortedStartTime = book_time.map(([s, e]) => [getMinutes(s), getMinutes(e)]).sort((a, b) => a[0] - b[0]);
    const LEN = sortedBookTime.length;
    const rooms = [];
    
    for (let i = 0; i < LEN; i++) {
        const [cS, cE] = sortedStartTime[i];
        const roomIndex = rooms.findIndex((roomEndTime) => cS - roomEndTime >= 10);
        if (roomIndex > -1) {
            rooms[roomIndex] = cE;
        } else {
            rooms.push(cE);
        }
    }
    return rooms.length;
}