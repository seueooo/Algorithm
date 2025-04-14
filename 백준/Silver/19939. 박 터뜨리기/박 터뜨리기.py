import sys

n,k = map(int,sys.stdin.readline().split())

sum = 0

# k개의 연속된 수 중 가장 작은 합
for i in range(1,k+1):
    sum+=i

# 1부터 k까지의 연속된 수를 더한 게 n보다 크면 n을 k개의 연속된 자연수로 표현 불가
if (sum>n):
    print(-1)

else:
    n-=sum
    if (n%k==0):
        print(k-1)
    else:
        print(k)