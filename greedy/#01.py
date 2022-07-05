#모험가길드
n = int(input())
members = list(map(int,input().split()))
members.sort()
count = 0
flag_index = 0
flag = members[flag_index]
while (flag_index+flag <= len(members)-1):
    for i in range(flag_index, flag_index+flag):
        if members[i] > flag:
            break
    count += 1
    flag_index += flag
    flag = members[flag_index]
print(count)
