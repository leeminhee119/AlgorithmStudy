# https://school.programmers.co.kr/learn/courses/30/lessons/42862
# 체육복
def solution(n, lost, reserve):
    answer = n
    new_reserve = [i for i in reserve if i not in lost]
    new_reserve.sort()  # 정렬... 꼭.. 해줘야 아래 알고리즘이 그리디하게 된다
    new_lost = [i for i in lost if i not in reserve]
    new_lost.sort()
    for num_lost in new_lost:
        if num_lost - 1 in new_reserve:
            new_reserve.remove(num_lost - 1)
        elif num_lost + 1 in new_reserve:
            new_reserve.remove(num_lost + 1)
        else:
            answer -= 1
    return answer
