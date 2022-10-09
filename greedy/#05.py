# 볼링공 고르기
n, m = map(int,input().split())
balls = list(map(int,input().split()))
count = 0
for i in range(len(balls)):
    for j in range(i+1, len(balls)):
        if balls[i] != balls[j]:
            count += 1
print(count)
