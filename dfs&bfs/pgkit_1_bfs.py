from collections import deque


def solution(numbers, target):
    answer = 0
    length = len(numbers)
    # 덱 생성
    dq = deque()
    # 덱 초기화
    idx = 0
    dq.append(0)
    while dq:
        # 방문처리
        current = dq.popleft()
        if idx < length:
            dq.append(current + numbers[idx])
            dq.append(current - numbers[idx])
            idx += 1
        else:
            if current == target:
                answer += 1
    return answer
