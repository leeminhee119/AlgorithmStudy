# 만들 수 없는 금액
n = int(input())
coins = list(map(int,input().split()))
coins.sort()
target = 1  #만들고자 하는 금액
for coin in coins:
    if coin > target:
        break
    else:
        target += coin
print(target)