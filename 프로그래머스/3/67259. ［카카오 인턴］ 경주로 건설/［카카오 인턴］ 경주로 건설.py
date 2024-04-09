from collections import deque
from pprint import pprint

# 상, 하, 좌, 우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
INF = int(1e9)

def solution(board):    
    def check(x, y):
        if x < 0 or x >= n or y < 0 or y >= n: return False
        if board[x][y] == 1: return False
        return True
    
    def bfs(_dir):
        q = deque([(0, 0, 0, _dir)])
        
        dist = [[INF] * n for _ in range(n)]
        dist[0][0] = 0
        
        while q:
            x, y, c, prev_dir = q.popleft()
            
            if x == n - 1 and y == n - 1:
                continue
                
            # 0: 상, 1: 하, 2: 좌, 3: 우
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if check(nx, ny):
                    if prev_dir == i:
                        cost = c + 100
                    else:
                        cost = c + 600
                            
                    if cost < dist[nx][ny]:
                        dist[nx][ny] = cost
                        q.append((nx, ny, cost, i)) # 큐에 추가한다.
                        
        return dist[-1][-1]
    
    n = len(board)
    answer = min(bfs(1), bfs(3))
    
    return answer