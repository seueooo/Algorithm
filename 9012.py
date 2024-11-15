t = int(input()) #테스트 케이스의 수

for i in range(t):
    stack = [] #스택을 초기화
    a=input()
    for j in a:
        if j == '(': #여는 괄호를 만나면 스택에 추가
            stack.append(j)
        elif j == ')': #닫는 괄호를 만나면 스택에서 요소를 제거
            if stack:
                stack.pop()
            else: 
                print("NO") #스택이 비어있으면 
                break
    else: 
        if not stack: 
            print("YES")
        else: 
            print("NO")