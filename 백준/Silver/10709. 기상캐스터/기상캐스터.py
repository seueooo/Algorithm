H, W = map(int, input().split())

sky = [input().strip() for _ in range(H)]

res = [[0] * W for _ in range(H)]


for i in range(H):
    tmp = 1
    cloud = False
    for j in range(W):
        if not cloud and sky[i][j]=='.':
            res[i][j] = -1
        elif sky[i][j] == 'c':
            cloud = True
            res[i][j] = 0
            tmp = 1
        elif cloud and sky[i][j] == '.':
            res[i][j] = tmp
            tmp += 1

for i in res:
    print(*i, end='\n')