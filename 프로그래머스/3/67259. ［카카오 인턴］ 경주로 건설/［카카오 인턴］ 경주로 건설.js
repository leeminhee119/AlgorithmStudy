function solution(board) {
    const N = board.length;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    function bfs(start, memo, initDir) {
        const queue = [[...start, 0, initDir]];
        
        while (queue.length) {
            const [x, y, prevCost, prevDir] = queue.shift();
            
            for (let i = 0; i < dx.length; i++) {
                const [nx, ny] = [x + dx[i], y + dy[i]];
                const cost = prevCost + 100 + (i !== prevDir ? 500 : 0);
                
                if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue;
                if (board[nx][ny]) continue;
                if (memo[nx][ny] && memo[nx][ny] < cost) continue;
                
                memo[nx][ny] = cost;
                queue.push([nx, ny, cost, i]);
            }
        }
        return memo[N - 1][N - 1];
    }
    const answer = Math.min(bfs([0, 0], Array.from({length: N}, () => new Array(N).fill(0)), 1), bfs([0, 0], Array.from({length: N}, () => new Array(N).fill(0)), 3));
    return answer;
}