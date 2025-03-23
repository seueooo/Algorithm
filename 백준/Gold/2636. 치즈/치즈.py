from collections import deque

h, w = map(int, input().split())

time = 0

cheese = [list(map(int, input().split())) for _ in range(h)]

melt = []



dx = [-1,1,0,0]
dy = [0,0,-1,1]


def bfs():
    visited = [[False]*w for _ in range(h)]
    q = deque()
    q.append((0,0))
    visited[0][0] = True
    cnt = 0
    while q:
        y, x = q.popleft()

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0<=nx<w and 0<=ny<h and not visited[ny][nx]:
                visited[ny][nx] = True

                #인접한 곳이 치즈면 녹이기
                if cheese[ny][nx]==1:
                    cheese[ny][nx] = 0
                    cnt += 1
                    

                #좌표가 0일때는 탐색 계속 진행
                elif cheese[ny][nx]==0:
                    q.append((ny,nx))     
       
    melt.append(cnt)
    return cnt    
                
# bfs()은 1시간에 녹여지는 치즈의 개수를 반환
while True: 
    cnt = bfs()
    if cnt == 0:
        break
    
    time+=1

print(time)
print(melt[-2])