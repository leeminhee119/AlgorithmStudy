# 게임 맵 최단거리
from collections import deque


def solution(maps):
    answer = 0
    # 상하좌우 방향 벡터
    dx = [0, 0, -1, 1]  # 좌우
    dy = [-1, 1, 0, 0]  # 상하
    n = len(maps)  # 행, 상하
    m = len(maps[0])  # 열, 좌우
    visited = [[0 for i in range(m)] for j in range(n)]

    def bfs(maps):
        dq = deque()
        # 시작 노드는 방문 처리
        dq.append((0, 0))
        visited[0][0] = 1
        while dq:
            x, y = dq.popleft()
            for i in range(4):
                # 인접 좌표
                nx = x + dx[i]
                ny = y + dy[i]
                # 지도를 벗어난다면
                if nx < 0 or ny < 0 or nx > n-1 or ny > m-1:
                    continue
                # 이미 방문했다면 (또는 벽으로 막혀있다면)
                if visited[nx][ny] == 1 or maps[nx][ny] == 0:
                    continue
                else:
                    # 방문처리
                    visited[nx][ny] = 1
                    maps[nx][ny] = maps[x][y] + 1
                    dq.append((nx, ny))
        return maps[n-1][m-1]
    result = bfs(maps)
    if result == 1:
        answer = -1
    else:
        answer = result
    return answer
