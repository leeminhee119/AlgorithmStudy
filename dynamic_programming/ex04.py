# 바닥 공사 p.223
import sys
input = sys.stdin.readline
n = int(input())
d = [0] * 1001
d[1] = 1
d[2] = 3
for i in range(3, n+1):
    d[i] = (d[i-1] + d[i-2]*2) %769769

print(d[n])