function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]);
    let total = 0;
    let j = 0;
    let now = 0;
    const priorityQueue = [];
    while (j < jobs.length || priorityQueue.length) {
        if (j < jobs.length && now >= jobs[j][0]) {
            priorityQueue.push(jobs[j++]);
            priorityQueue.sort((a, b) => b[1] - a[1]);
            continue;
        }
        if (priorityQueue.length > 0) {
            const top = priorityQueue.pop();
            now += top[1];
            total += (now - top[0]);
        } else {
            now = jobs[j][0];
        }
    }
    return parseInt(total / jobs.length);
}