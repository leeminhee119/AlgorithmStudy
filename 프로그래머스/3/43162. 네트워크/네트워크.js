function solution(n, computers) {
    const graph = Array.from({length: n + 1}, () => new Array());
    computers.forEach((computer, idx) => {
        computer.forEach((next, nextIdx) => nextIdx !== idx && next ? graph[idx + 1].push(nextIdx + 1) : null)
    })
    
    function dfs(start, visited) {
        visited[start] = true;
        for (let i = 0; i < graph[start].length; i++) {
            const next = graph[start][i];
            if (visited[next]) continue;
            dfs(next, visited);
        }
    }
    
    const visited = Array.from({length: n + 1}, () => false);
    let cnt = 0;
    for (let i = 1; i < n + 1; i++) {
        if (visited[i]) continue;
        dfs(i, visited);
        cnt++;
    }
    return cnt;
}