#p.201 떡볶이 떡 만들기
def getH(lengths, h_start, h_end, target):
    # if h_start > h_end:
    #     return current_mid
    mid = (h_start + h_end) // 2 # 높이 h는 양의 정수
    result = 0
    for i in range(len(lengths)):
        if lengths[i] <= mid:
            continue
        result += lengths[i] - mid
    if result < target and h_start <= mid-1:
        return getH(lengths, h_start, mid-1, target)
    elif result > target and mid+1 <= h_end:
        return getH(lengths, mid+1, h_end, target)
    else:
        return mid

n, m = map(int, input().split()) # n은 정수이겠으나, m이 소수점 있을 수 있으므로 float
lengths = list(map(int,input().split()))
max_length = max(lengths)


d = getH(lengths, 0, max_length-1, m)
if d > 1000000000:
    d = 1000000000
print(d)
