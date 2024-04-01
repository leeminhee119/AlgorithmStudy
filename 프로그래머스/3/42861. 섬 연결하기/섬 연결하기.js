function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    const parents = Array.from({length: n}, (_, i) => i);
    let answer = 0;
    function findParent(parents, x) {
        if (parents[x] === x) return x;
        return findParent(parents, parents[x]);
    }
    for (let i = 0; i < costs.length; i++) {
        const [x, y, cost] = costs[i];
        const px = findParent(parents, x);
        const py = findParent(parents, y);
        if (px === py) continue;
        answer += cost;
        if (px < py) {
            parents[py] = px;
        } else {
            parents[px] = py;
        }
    }
    return answer;
}