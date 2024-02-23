# 유기농 배추
from collections import deque
import sys
input = sys.stdin.readline


t = int(input())

def bfs(graph, x, y):
    q = deque()
    q.append((x,y))
    graph[y][x] = 0
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    while q:
        x,y = q.popleft()
        # graph[y][x] = 0   #방문처리
        # cabbage.remove((x,y))
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx<0 or nx>=m or ny<0 or ny>=n:
                continue
            if graph[ny][nx] == 0:
            # if (x,y) not in cabbage:
                continue
            else:
                q.append((nx,ny))
                cabbage.remove((nx,ny))
                graph[ny][nx] = 0

for _ in range(t):

    m, n, k = map(int,input().split())
    graph = [[0 for _ in range(m)] for _ in range(n)]
    cabbage = []
    for _ in range(k):
        x, y = map(int,input().split())
        cabbage.append((x,y))
        graph[y][x] = 1

    
    for x, y in cabbage:
        bfs(graph, x, y)
    print(len(cabbage))
