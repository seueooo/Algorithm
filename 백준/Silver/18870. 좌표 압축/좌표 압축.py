n = int(input())

nums = list(map(int, input().split()))


# set으로 중복 제거 후 list 형식으로 만들어줘야 함
sorted_nums = sorted(list(set(nums)))

dic = {}

# value: 정렬된 숫자들의 순서값
for i in range(len(sorted_nums)):
    dic[sorted_nums[i]] = i

for i in nums:
    print(dic[i], end=' ')
