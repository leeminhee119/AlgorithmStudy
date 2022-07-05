#곱하기 혹은 더하기
# 답안 참고 후 작성
s = list(map(int,input()))
result = s[0]
for i in range(1, len(s)):
    num = s[i]
    if num > 1 and result > 1:
        result *= num
    else:
        result += num
print(result)