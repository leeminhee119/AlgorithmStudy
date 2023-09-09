function solution(n, computers) {
    const graph = computers.map((computerArr, computerArrIndex) => {
        const arr = []
        computerArr.forEach((computer, computerIndex) => {
            if (computer && computerIndex !== computerArrIndex) {
                arr.push(computerIndex)
            }
        })
        return arr;
    })
    
    const visited = Array.from({length: computers.length}, () => false)
    let sum = 0;
    const dfs = (graph, startNo) => {
        visited[startNo] = true;
        for (const connectedCom of graph[startNo]) {
            if (!visited[connectedCom]) {
                dfs(graph, connectedCom);
            }
        }
    }

    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            sum++;
            dfs(graph, i);
        }
    }

    return sum;
}