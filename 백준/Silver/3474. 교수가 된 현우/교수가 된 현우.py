import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n = int(input())
    count = 0
    i = 5
    while i <= n:
        count += n // i  
        i *= 5
    print(count)