# 개미 전사
n = int(input())
foodArr = map(int,input().split())
d = [0] * 100
d[0] = foodArr[0]
d[1] = max(d[0], foodArr[1]) 

for i in range(2, n+1):
    d[i] = max(d[i-1], d[i-2] + foodArr[i])

print(d[n-1])
