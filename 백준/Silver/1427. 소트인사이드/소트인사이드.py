n = list(input())

for i in range(len(n)):
    n[i] = int(n[i])

print(*sorted(n, reverse=True), sep='')