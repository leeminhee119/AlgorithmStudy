# 타겟 넘버
def solution(numbers, target):
    answer = 0
    length = len(numbers)

    def dfs(current, idx):
        if idx == length:
            if current == target:
                nonlocal answer
                answer += 1
            else:
                return
        else:
            dfs(current + numbers[idx], idx + 1)
            dfs(current - numbers[idx], idx + 1)
    dfs(0, 0)
    return answer
