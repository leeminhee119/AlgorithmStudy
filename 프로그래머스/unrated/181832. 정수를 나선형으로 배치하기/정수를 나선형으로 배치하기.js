/*
우: i, j + 1 (j가 n - 1, i가 0일 때 아래로)
하: i + 1, j (i가 n - 1, j가 n - 1일 때 좌측으로)
좌: i, j - 1 (j가 0, i가 n - 1일 때 위로)
상: i - 1, j (i가 0, j가 0일 때 우측으로)
*/
function dfs(graph, row, col, direction, n, cur) {
    if (row < 0 || row >= n || col < 0 || col >= n || graph[row][col] !== 0) {
        return;
    }
    graph[row][col] = cur;
    if (direction === '우') {
        if (col + 1 < n && !graph[row][col + 1]) {
            dfs(graph, row, col + 1, direction, n, cur + 1)
        } else {
            dfs(graph, row + 1, col, '하', n, cur + 1)
        }
    } else if (direction === '하') {
        if (row + 1 < n && !graph[row + 1][col]) {
            dfs(graph, row + 1, col, direction, n, cur + 1)
        } else {
            dfs(graph, row, col - 1, '좌', n, cur + 1)
        }
    } else if (direction === '좌') {
        if (col - 1 >= 0 && !graph[row][col - 1]) {
            dfs(graph, row, col - 1, direction, n, cur + 1)
        } else {
            dfs(graph, row - 1, col, '상', n, cur + 1)
        }
    } else if (direction === '상') {
        if (row - 1 >= 0 && !graph[row - 1][col]) {
            dfs(graph, row - 1, col, direction, n, cur + 1)
        } else {
            dfs(graph, row, col + 1, '우', n, cur + 1)
        }
    }
    return graph;
}

function solution(n) {
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    
    return dfs(result, 0, 0, '우', n, 1);
    
}