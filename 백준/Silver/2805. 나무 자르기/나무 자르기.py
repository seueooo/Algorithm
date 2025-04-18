import sys
import bisect
input = sys.stdin.readline

n,m = map(int, input().split())
h = list(map(int,input().split()))

h.sort()

start = 1
end = max(h)
result = 0

# 누적합 + bisect 이용하면 시간초과 안뜸
# 누적된 절단된 나무의 길이 합
prefix_sum = [0] * (n + 1)
for i in range(n):
    prefix_sum[i + 1] = prefix_sum[i] + h[i]

while start<=end:
    # 절단기 높이
    mid = (start+end)//2
    total_length = 0
    idx = bisect.bisect_right(h,mid)

    # 자를 나무의 개수
    cnt = n-idx
    total_length = prefix_sum[n]-prefix_sum[idx]-cnt*mid

    if total_length>=m: #하 이 부분 조건문 오류였... 조건 잘따지기...적어도 m미터 이상
        result=mid # 조건 만족 → 일단 저장하고
        start=mid+1 # 더 높은 값도 될지 탐색
    else:
        end = mid-1
        
print(result)