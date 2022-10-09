#연결요소의 개수
from collections import deque
import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline


n,m = map(int,input().split())
graph=[[] for _ in range(n+1)]
for _ in range(m):
    u,v = map(int,input().split())
    graph[u].append(v)
    graph[v].append(u)

visited=[False for i in range(n+1)]
def dfs(graph, v):
    visited[v] = True
    length = len(graph[v])
    for i in range(length):
        if not visited[graph[v][i]]:
            dfs(graph, graph[v][i])

# def bfs(graph, v):
#     q = deque([v])
#     while q:
#         cur = q.popleft()
#         visited[cur] = True
#         length = len(graph[cur])
#         for i in range(length):
#             elem = graph[cur][i]
#             if not visited[elem]:
#                 q.append(elem)

cnt = 0
for i in range(1, n+1):
    if not visited[i]:
        dfs(graph, i)
        cnt += 1
print(cnt)