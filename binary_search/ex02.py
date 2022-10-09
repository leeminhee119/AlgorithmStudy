#p.197 부품찾기
# import sys
# input = sys.stdin.readline().rstrip()

def binSearch(array, start, end, target):
    if start > end:
        return False
    mid = (start + end) // 2
    if array[mid] == target:
        return True
    if array[mid] > target:
        return binSearch(array, start, mid-1, target)
    elif array[mid] < target:
        return binSearch(array, mid+1, end, target)




n = int(input())
stocks = list(map(int, input().split()))
stocks.sort()
m = int(input())
targets = list(map(int, input().split()))

for i in range(m):
    result = binSearch(stocks, 0, n-1, targets[i])
    if result == True:
        print('yes', end=' ')
    else:
        print('no', end=' ')
    
