n = int(input())
limit = list(map(int,input().split()))
m = int(input())

# 금액의 시작점과 끝점을 설정하여 탐색
# 상한선이 조건을 만족한다면 상한선 금액 증가
# 만족을 못한다면 금액 감소
# 탐색 끝나면 결과 출력

start = 1
end = max(limit)
result =0
while (start<=end):
    mid = (start+end)//2
    total = 0
    # 예산 배정
    for x in limit:
        total+= min(x, mid)
    
    if total<=m:
        result = mid
        start = mid +1
    else:
        end = mid - 1

print(result)