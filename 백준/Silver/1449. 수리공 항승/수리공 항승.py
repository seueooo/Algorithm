n, l = map(int, input().split())
location = list(map(int,input().split()))

location.sort()

start = location[0]-1
end = start + l
cnt=1

for i in range(1,n):
    if (location[i]<=end):
        pass
    else:
        cnt+=1
        start = location[i]-1
        end = start+l
        
print(cnt)