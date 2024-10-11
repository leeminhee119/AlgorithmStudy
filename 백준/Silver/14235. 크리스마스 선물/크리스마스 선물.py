import sys
import heapq
input = sys.stdin.readline

n = int(input())

presents = []
for _ in range(n):
  a = list(map(int, input().split()))
  if a[0] == 0:
    if len(presents) == 0:
      print(-1)
    else:
      print(heapq.heappop(presents)[1])
  else:
    num, presentInfo = a[0], a[1:]
    for j in range(num):
      heapq.heappush(presents, (-presentInfo[j], presentInfo[j]))
