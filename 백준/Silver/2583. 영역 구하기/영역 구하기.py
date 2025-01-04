from collections import deque

m, n, k = map(int,input().split())
arr=[[0]*n for _ in range(m)]
answer=[]

for _ in range(k):
    x1,y1,x2,y2 = map(int,input().split())
    for i in range(y1,y2):
        for j in range(x1,x2):
                arr[i][j] = 1

dx = [-1,1,0,0]
dy = [0,0,-1,1]

def bfs(i,j):
    cnt = 1
    q = deque()
    q.append((i,j))
    
    arr[i][j] = 1
    
    while q:
        y,x = q.popleft()
        for i in range(4):
          nx = x+dx[i]
          ny = y+dy[i]
          if 0<=nx<n and 0<=ny<m and arr[ny][nx]==0:
              arr[ny][nx]=1
              q.append((ny,nx))
              cnt +=1
    return cnt

for i in range(m):
    for j in range(n):
        if arr[i][j]==0:
          arr[i][j]=1
          answer.append(bfs(i,j))

answer.sort()
print(len(answer))
print(*answer)