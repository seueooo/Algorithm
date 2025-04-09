formula = input().split('-')

# 더한 숫자들을 담는 배열
nums = []

for n in formula:
    sum = 0
    tmp =[]
    if ('+' in n):
        tmp = n.split('+')
    else:
        sum+=int(n)
    for i in tmp:
        sum+=int(i)
    nums.append(sum)

res = nums[0]

for i in range(1, len(nums)):
    res -=nums[i]

print(res)