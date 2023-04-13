# 1,2,3 더하기

t = int(input())
d = [0] * 11
d[1] = 1
d[2] = 2
d[3] = 4
for i in range(t):
    n = int(input())
    for j in range(4, n+1):
        if d[j]!=0:
            continue
        d[j] = d[j-1]+d[j-2]+d[j-3]
    print(d[n])

