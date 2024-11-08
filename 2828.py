n, m = map(int, input().split())
j = int(input())

#바구니의 초기 위치
start = 1
end = m
distance = 0

for _ in range(j):
    p = int(input())

    if p < start:
        #바구니의 이동거리 누적
        distance += (start - p)
        
        #바구니의 새 위치로 설정
        start = p
        end = p + m - 1

    elif p > end:
        distance += (p - end)
        end = p
        start = end - m + 1

print(distance)