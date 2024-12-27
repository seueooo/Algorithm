import sys
N = int(sys.stdin.readline())
st = sys.stdin.readline().strip()
stack = []
cnt = [0] * N 
ans = 0
max_ans = 0
for i in range(N):
    if st[i] == "(":
        stack.append(i)
    else:
        if stack:
            cnt[i] = cnt[stack[-1]] = 1 
            stack.pop() 
for c in cnt: 
    if c == 1: 
        ans += 1 
        max_ans = max(max_ans, ans) 
    else: 
        ans = 0
print(max_ans)