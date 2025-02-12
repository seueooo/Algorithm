from collections import deque

T = int(input())

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y, M,N):
    q = deque()
    q.append((x,y))
    # 방문처리
    graph[y][x] = 0

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if 0<=nx<M and 0<=ny<N and graph[ny][nx]==1:
                # 방문처리
                graph[ny][nx]=0
                q.append((nx, ny))
    return

for i in range(T):
    cnt = 0
    M, N, K = map(int, input().split())
    # 그래프 초기화
    graph = [[0] * M for _ in range(N)]
    for i in range(K):
        X,Y = map(int, input().split())
        graph[Y][X] = 1
    for i in range(N):
        for j in range(M):
            if graph[i][j] == 1:
                bfs(j,i, M,N)
                cnt+=1
    print(cnt)

