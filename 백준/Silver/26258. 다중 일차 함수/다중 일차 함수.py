import sys
input = sys.stdin.readline

n = int(input())
graph = []
for _ in range(n):
    x,y = map(int,input().split())
    graph.append((x,y))

q = int(input())


for _ in range(q):
    k = float(input())
    start =0
    # index 에러 방지
    end = n-2
    idx = 0
    # k범위를 포함한 정수 idx 구하기
    while start<=end:
        mid = (start+end)//2
        if graph[mid][0]<k and k<graph[mid+1][0]:
            idx=mid
            break
        elif graph[mid][0]<k:
            start= mid+1
        else:
            end = mid-1
        
    # 기울기 비교

    y1 = graph[idx][1]
    y2 = graph[idx+1][1]
    if y1<y2:
        print(1)
    elif y1>y2:
        print(-1)
    else:
        print(0)