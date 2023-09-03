function solution(n, vertex) {
    const graph = Array.from({length: n + 1}, () => []);
    vertex.forEach(nodes => {
        const [start, end] = nodes;
        graph[start].push(end);
        graph[end].push(start);
    })
    
    const queue = [1];
    const visited = Array.from({length: n + 1}, () => 0);
    visited[1]++;
    while (queue.length) {
        const cur = queue.shift();
        for (let nextNode of graph[cur]) {
            if (!visited[nextNode]) {
                visited[nextNode] = visited[cur] + 1;
                queue.push(nextNode);
            }
        }
    }
    const maxValue = Math.max(...visited);
    return visited.reduce((sum, node) => {
        if (node === maxValue) sum ++;
        return sum
    }, 0)
}