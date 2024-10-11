function solution(book_time) {
    function getTimeInteger (timeStr) {
        const [h, m] = timeStr.split(':').map(Number);
        return h * 60 + m;
    }
    // 끝나는 시간이 제일 빠른 애를 방에 넣고
    // 그 다음으로 빠른 애 순서대로 기존 방/새로운 방에 넣는다
    // 방들을 끝나는 시간이 느린 순으로 정렬 
    
    
    const endTimes = [];
    const bookings = book_time.map(([start, end]) => [getTimeInteger(start), getTimeInteger(end)]).sort((a, b) => a[1] - b[1]);
    for (const [s, e] of bookings) {
        if (endTimes.length === 0) {
            endTimes.push(e + 10);
            continue;
        }
        endTimes.sort((a, b) => b - a);
        const targetIdx = endTimes.findIndex((time) => time <= s);
        if (targetIdx === -1) {
            endTimes.push(e + 10);
        } else {
            endTimes[targetIdx] = e + 10;
        }
    }
    return endTimes.length;
}