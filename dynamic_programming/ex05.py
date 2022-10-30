# 효율적인 화폐 구성 p.226
import sys
input = sys.stdin.readline
n, m = map(int, input().split())
moneys = []
for _ in range(n):
    moneys.append(int(input()))

d = [10001] * 10001 # default가 10,000보다 큰 값이어야 어떤 방식으로든 10,001 구성 x (min함수 적용 시 필요)
d[0] = 0
for money in moneys:
    # print("money =", money)
    for i in range(1, m+1):
        # print("goal=", i,"won")
        if i > money:
            d[i] = min(d[i], d[i-money]+1)
            # print("d[", i, "] = " , d[i])
        elif i == money:
            d[i] = 1
            # print("d[", i, "] = " , d[i])

if (d[m] == 10001):
    print(-1)
else:
    print(d[m])