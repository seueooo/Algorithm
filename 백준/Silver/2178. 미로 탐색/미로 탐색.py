from collections import deque

n, m = map(int, input().split())
graph = []

for i in range(n):
    graph.append(list(map(int, input())))
                 
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
                 
def bfs(x,y):
    queue = deque()
    queue.append((x, y))

    while queue:
        # 현재 탐색 중인 좌표 (x, y)를 꺼냄
        x, y = queue.popleft()
        
        for i in range(4):
            # 상하좌우로 이동한 좌표 (nx, ny)
            nx = x + dx[i]
            ny = y + dy[i]

            if 0<=nx< n and 0 <= ny < m  and graph[nx][ny] == 1:
		            # 큐에 새로운 좌표 추가
                queue.append((nx, ny))
                # 시작점에서 해당 칸까지의 이동 거리
                graph[nx][ny] = graph[x][y] + 1
    
    return graph[n-1][m-1]

print(bfs(0, 0))