n = int(input())
info = []

one = 0
two = 0
flag = 0

for i in range(n):
    team, time = input().split()
    m, s = map(int, time.split(':'))
    
    if team == '1':
        if flag == 0:
            one += 48*60 - (60*m+s)

        flag += 1
        if flag == 0:
            if two > 0:
                two = two - (48*60 - (60*m+s))
            
            
    else:
        if flag == 0:
            two += 48*60 - (60*m+s)
        
        flag -= 1
        if flag == 0:
            if one > 0:
                one = one - (48*60 - (60*m+s))
                
                
print('{:0>2}:{:0>2}'.format(one//60,one%60))
print('{:0>2}:{:0>2}'.format(two//60,two%60))