
n = int(input())

arr = []

for _ in range(n):
    x, y = map(int, input().split())
    arr.append((x,y))


sorted = sorted(arr, key = lambda x: (x[1],x[0]))

for x, y in sorted:
    print(x, y)