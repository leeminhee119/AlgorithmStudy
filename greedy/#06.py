# 무지의 먹방 라이브
def solution(food_times, k):
    answer = 0
    
    while True:
        l = len(food_times)
        cycle = k // l
        
        if cycle == 0:
            answer = k+1
            break
            
        min_time = min(food_times)
        delete = []
        if min_time <= cycle:
            for i in range(l):
                food_times[i] -= min_time
                if food_times[i] == 0:
                    delete.append(food_times[i])
            food_times = list(set(food_times) - set(delete))
            k -= min_time*l
        else:
            for i in range(l):
                food_times[i] -= cycle
            k -= cycle*l
            answer = k+1
            break
    return answer
print(solution([3,1,2], 5))

# 무지의 먹방 라이브
# def solution(food_times, k):
#     answer = 0
    
#     while True:
#         l = len(food_times)
#         if k==0 and l>0:
#             answer = 1
#         if l == 0:
#             answer = -1
#             break
#         min_time = min(food_times)
#         if (k-min_time*l)>=0:
#             k -= min_time*l
#             delete = []
#             for i in range(l):
#                 if food_times[i] == min_time:
#                     delete.append(food_times[i])
#             food_times = [x for x in food_times if x not in delete]
#         else:
#             answer = k%l+1
#             break
#     return answer