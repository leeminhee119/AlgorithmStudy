#숨바꼭질
from collections import deque
n, k = map(int,input().split())
MAX = 100000
dist=[0 for i in range(MAX+1)]
def bfs(n,k):
    q = deque([n])
    while q:
        cur = q.popleft()
        if cur==k:
            return dist[cur]
        for nx in (cur-1,cur+1,cur*2):
            if 0<=nx<=100000 and dist[nx]==0:
                dist[nx]=dist[cur]+1
                q.append(nx)
    return max(dist)
print(bfs(n,k))