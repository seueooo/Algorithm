from collections import deque

str= list(input())

M = int(input())
stack_l = deque(str)
stack_r = deque()

for i in range(M):
    command = (input())
    if('P' in command):
        a,b = command.split(' ')
        stack_l.append(b)

    elif (command == 'L'):
        if stack_l:
            stack_r.appendleft(stack_l.pop())
        
    elif (command == 'D'):
        if stack_r:
            stack_l.append(stack_r.popleft())
       
    elif (command == 'B'):
        if stack_l:
            stack_l.pop()

asw = ''.join(stack_l+stack_r)

print(asw)
