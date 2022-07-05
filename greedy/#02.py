#곱하기 혹은 더하기
nums = list(map(int,input()))
result = 1   #이렇게하기보다 아예 첫번째 원소를 저장하는게 낫다
for i in range(len(nums)):
    if i > 0 and nums[i-1]==1:
        result += nums[i]
        continue
    if nums[i] == 0:
        continue
    if nums[i] == 1:
        if i != 0:
            result += nums[i]
        else: continue
    result *= nums[i]

print(result)

# 답도 틀리고.. 해석하기도 힘들고..
# 규칙을 간결하게 정리한 뒤에 코드를 짜자. case 별로 나누기.
# 답은 #02_ex.py 참고