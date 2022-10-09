# 우선순위 큐를 이용
import heapq

k = int(input())
food_times = list(map(int,input().split()))

q = []
length = len(food_times)
for i in range(length):
    heapq.heappush(q, (food_times[i],i+1))
