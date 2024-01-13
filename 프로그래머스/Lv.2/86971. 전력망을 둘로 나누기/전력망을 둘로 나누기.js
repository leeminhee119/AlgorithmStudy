function dfs(graph, pos) {
    const stack = [pos];
    let count = 0;
    const visited = Array.from({length: graph.length}, () => false);
    visited[pos] = true;
    while (stack.length) {
        const node = stack.pop();
        count ++;
        graph[node].forEach((next) => {
            if (!visited[next]) {
                stack.push(next)
                visited[next] = true;
            }
        })
    }
    return count;
}

function solution(n, wires) {
    const graph = Array.from({length: n + 1}, () => new Array());
    wires.forEach((wire, index) => {
        const [a, b] = wire;
        graph[a].push(b);
        graph[b].push(a);
    })
    
    const diffs = [];
    // 하나씩 단선
    wires.forEach((wire) => {
        const [a, b] = wire;
        graph[a].splice(graph[a].indexOf(b), 1);
        graph[b].splice(graph[b].indexOf(a), 1);
        const countA = dfs(graph, a);
        const countB = dfs(graph, b);
        diffs.push(Math.abs(countA - countB));
        graph[a].push(b);
        graph[b].push(a);
    })
    return Math.min(...diffs);
}