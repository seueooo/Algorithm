N,K = map(int, input().split())
p = [i for i in range(1,N+1)]
asr = []
num = 0

for i in range(N):
    num += K-1
    if num>=len(p):
        num= num%len(p)
    asr.append(str(p.pop(num)))

print("<",", ".join(asr),">",sep="")