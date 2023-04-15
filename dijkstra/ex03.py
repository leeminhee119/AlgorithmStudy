# 전보 (p262)
import heapq
import sys
input = sys.stdin.readline
INF = int(1e9)

# 도시의 개수, 통로의 개수, 출발 도시
n, m, c = map(int, input().split())
# 도시 간 연결 정보를 담은 그래프 리스트
graph = [[] for i in range(n + 1)] # 인덱스가 도시 번호
for _ in range(m):
    # 도시 x에서 도시 y까지 시간 z가 걸린다
    x, y, z = map(int, input().split())
    graph[x].append((y, z))
# 출발 도시로부터 각 도시까지 걸리는 시간
times = [INF] * (n + 1)
start = c

def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start)) # (출발회사로부터 걸리는 시간, 회사번호)
    while q:
        time, now = heapq.heappop(q)
        # 방문한 적이 있는 회사인지 체크
        if times[now] < time:
            continue
        for i in graph[now]:
            cost = time + i[1]
            if cost < times[i[0]]:
                times[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

dijkstra(start)
# 값이 무한대인 경우 (=도달할 수 없는 도시) 삭제
times = list(filter(lambda t: t != INF, times))
print(len(times), max(times))