import sys

t = int(sys.stdin.readline())
fibo = [0, 1]
while fibo[-1] < 10**9:
    fibo.append(fibo[-2] + fibo[-1])

for i in range(2,len(fibo)):
    fibo[i] = fibo[i-1] + fibo[i-2]


for _ in range(t):
    n = int(sys.stdin.readline())
    i = len(fibo)-1
    res = []
    while n>0:
        if (fibo[i]<=n):
            n-=fibo[i]
            res.append(fibo[i])
        i-=1
        
    res.reverse()
    print(*res)

