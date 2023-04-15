# 미래도시 - 다익스트라 풀이
import heapq
import sys
input = sys.stdin.readline
INF = int(1e9)

n, m = map(int,input().split())

# 회사 간의 연결 정보를 담은 그래프 리스트
graph = [[] for i in range(n + 1)] # 인덱스가 곧 회사의 번호

for _ in range(m):
    # 연결된 두 회사의 번호
    a, b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)

# 두 목적지 회사의 번호
x, k = map(int,input().split())


# 출발 회사로부터 걸리는 시간 정보를 담은 리스트
times = [INF] * (n + 1)

def dijkstra(start, destination):
    q = []
    heapq.heappush(q, (0, start)) # (걸리는 시간, 회사 번호)
    while q:
        # 최단 시간의 회사를 선택한다
        time, now = heapq.heappop(q)
        # 방문한 적이 있는지 확인
        if times[now] < time:
            # 방문한 적이 있다면 이미 최소 시간이 저장돼있음
            # 선택한 회사가 목적지인 회사면 종료
            if now == destination:
                break
            continue
        for i in graph[now]:
            cost = time + 1
            if cost < times[i]:
                # 더 짧은 시간이 걸린다면 시간 리스트 갱신
                times[i] = cost
                heapq.heappush(q, (times[i], i))

dijkstra(1, k)
time1toK = times[k]
dijkstra(k, x)
timeKtoX = times[x]
if time1toK == INF or timeKtoX == INF:
    print(-1)
else:
    print(time1toK + timeKtoX)