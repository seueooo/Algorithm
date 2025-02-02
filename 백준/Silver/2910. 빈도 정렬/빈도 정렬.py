N,C = map(int, input().split())
nums = list(map(int, input().split()))

dic = {}
order = 0

for i in nums:
    if i in dic:
        dic[i][0]+=1
    else:
        order+=1
        dic[i] = [1, order]

sorted_dic = sorted(dic.items(), key= lambda x: (-x[1][0], x[1][1]))

result = []

for num, (cnt, _) in sorted_dic:
    result.extend([num]*cnt)

print(*result)