function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    let answer = 1;
    let camera = routes[0][1];
    for (const route of routes) {
        const [inPos, outPos] = route;
        if (inPos <= camera) continue;
        camera = outPos;
        answer++;
    }
    return answer;
}