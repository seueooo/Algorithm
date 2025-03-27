n = int(input())

dp = [1]*1000001

nums = list(map(int, input().split(' ')))

for i in range(n):
    for j in range(i):
        if (nums[j]>nums[i]):
            dp[i]=max(dp[i],dp[j]+1)
    
print(max(dp))