n = int(input())
cnt = 0
i = n
if n == 3 or n == 5:
    cnt = 1
else:
        while i >0:
            if i%5==0:
                i-=5
                cnt+=1
            else: 
                i-=3
                cnt+=1 
        if (i == 0):
            pass
        elif (i < 0):
            cnt = -1
        
print(cnt)