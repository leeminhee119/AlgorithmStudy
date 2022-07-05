# 문자열 뒤집기
s=list(map(int,input()))
cur = s[0]
cnt_change = 0
for i in s:
    if i != cur:
        cnt_change += 1
        cur = i

print((cnt_change+1)//2)
