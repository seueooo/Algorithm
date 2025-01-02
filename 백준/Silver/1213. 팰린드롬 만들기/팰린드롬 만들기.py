from collections import Counter
a = list(input())
a.sort()
count = (Counter(a))
odd = 0
ans = ''
odd_alpha = ''
for i in count:
    if count[i]%2 !=0:
        odd+=1
        odd_alpha = i
    for _ in range(count[i]//2):
        ans += i  
        
    
if odd > 1:
    print("I'm Sorry Hansoo")
elif odd ==1:
    print(ans+odd_alpha+ans[::-1])
elif odd < 1:
    print(ans+ans[::-1])