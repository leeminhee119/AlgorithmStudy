n = int(input())
members = list(map(int,input().split()))

cur_cnt = 0 # 현재 확인하고 있는 그룹의 모험가 수
result = 0 
 
for x in members:
    cur_cnt += 1
    if x <= cur_cnt:
        result+=1
        cur_cnt = 0

print(result)