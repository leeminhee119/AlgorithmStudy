#p.367 정렬된 배열에서 특정 수의 개수 구하기
# 이진탐색으로 알아낼 수 있는 것: 타겟의 유무뿐만이 아닌, 해당 타겟의 <인덱스>!!!
# 따라서, 처음 위치한 인덱스와 마지막 위치한 인덱스를 구하면 둘의 차이가 개수.

def binCnt_first(array, start, end, target):
    first = -1 # target이 가장 처음 등장한 인덱스
    while (start <= end):
        mid = (start + end) // 2
        if array[mid] < target:
            start = mid +1
        elif array[mid] > target:
            end = mid -1
        elif array[mid] == target:
            first = mid
            end = mid-1 # 왼쪽을 탐색
    return first

def binCnt_last(array, start, end, target):
    last = -1 # target이 가장 처음 등장한 인덱스
    while (start <= end):
        mid = (start + end) // 2
        if array[mid] < target:
            start = mid +1
        elif array[mid] > target:
            end = mid -1
        elif array[mid] == target:
            last = mid
            start = mid+1 # 오른쪽을 탐색
    return last

n, x = map(int, input().split())
array = list(map(int,input().split()))

cnt = -1 # default: 없는 경우
f = binCnt_first(array, 0, n-1, x)
if f != -1: # 있는 경우, cnt 갱신
    l = binCnt_last(array, 0, n-1, x)
    cnt = l-f+1

print(cnt)