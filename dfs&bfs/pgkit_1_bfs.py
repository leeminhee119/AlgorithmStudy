from collections import deque


def solution(numbers, target):
    answer = 0
    length = len(numbers)
    # 덱 생성
    dq = deque()
    # 덱 초기화
    dq.append((0, 0))
    while dq:
        # 방문처리
        current = dq.popleft()
        if current[1] < length:
            dq.append((current[0] + numbers[current[1]], current[1]+1))
            dq.append((current[0] - numbers[current[1]], current[1]+1))
        else:
            if current[0] == target:
                answer += 1
    return answer
