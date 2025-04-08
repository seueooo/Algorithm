import sys
input = sys.stdin.readline

n = int(input())
a=[]
for i in range(n):
    x,y = map(int,input().split())
    a.append([x,y])

a.sort(key=lambda y: y[1])
a.sort(key=lambda x: x[0])


for x in a:
    print(*x)