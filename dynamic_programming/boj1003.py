# 피보나치 함수
import sys
input = sys.stdin.readline

def countZeroOne(n):
    # 피보나치 함수에 0~40까지 입력됐을 때 각각 0이 출력되는 횟수
    dp0 = [0] * 41
    dp0[0] = 1
    # 피보나치 함수에 0~40까지 입력됐을 때 각각 1이 출력되는 횟수
    dp1 = [0] * 41
    dp1[1] = 1
    # 보텀업 다이나믹 프로그래밍
    for i in range(2, n + 1):
        dp0[i] = dp0[i - 1] + dp0[i - 2]
        dp1[i] = dp1[i - 1] + dp1[i - 2]
    
    return dp0[n], dp1[n]

t = int(input())
for _ in range(t):
    n = int(input())
    print(countZeroOne(n)[0], countZeroOne(n)[1])
