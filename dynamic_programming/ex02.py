# 1로 만들기

x = int(input())
d = [0]*30001 # (1<=x<=30000)  #1부터 30000까지의 숫자 각각의 최소 호출횟수를 저장한 리스트
for i in range(2, x+1):
    d[i] = d[i-1] + 1  # i의 최소 호출횟수 d[i]는 i-1에서 <1만 더하면> 되므로 d[i-1]에 <1을 더하는 호출> +1
    if i % 2 ==0:
        d[i] = min(d[i], d[i//2] + 1)  #i//2에서 <2만 곱하면> i이므로 d[i//2]에 <2를 곱하는 호출> +1 
    if i % 3 ==0:
        d[i] = min(d[i], d[i//3] + 1)
    if i % 5 ==0:
        d[i] = min(d[i], d[i//5] + 1)

print(d[x])
