n = int(input())

dp = [0]*n

nums = list(map(int, input().split(' ')))

for i in range(n):
    dp[i]+=nums[i]
    for j in range(i):
        if (nums[j]<nums[i]):
            dp[i] = max(dp[i], dp[j] + nums[i])

print(max(dp))