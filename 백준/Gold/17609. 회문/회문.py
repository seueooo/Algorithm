import sys

t = int(input())

def pelindrome(s):
    return (s==s[::-1])

for _ in range(t):
    s = list(sys.stdin.readline().strip())

    left = 0
    right = len(s) - 1
    is_palindrome = True 

    while left < right:
        if s[left] != s[right]:
            is_palindrome = False 
            # 왼쪽 문자 제거
            temp1 = s[left + 1:right + 1]
            # 오른쪽 문자 제거
            temp2 = s[left:right]
            if pelindrome(temp1) or pelindrome(temp2):
                print(1)
            else:
                print(2)
            break
        left += 1
        right -= 1
    
    if is_palindrome:
        print(0)