a, b = map(int, input().split())

cnt = 1
flag = False

while (a<=b):
    if (a==b):
        flag = True
        break

    if (b%2==0):
        b /= 2 
        
    elif (b%10 == 1):
        b = b // 10

    else:
        flag = False
        break
    cnt +=1
        

if flag:
    print(cnt)
else:
    print(-1)