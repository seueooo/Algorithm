import sys
a,b,c = map(int,sys.stdin.readline().split())

def answer (a,n):
  if n == 1:
      return a%c
  else:
      temp = answer(a,n//2)
      if n %2 ==0:
          return (temp * temp) % c
      else:
          return (temp  * temp *a) %c
          
print(answer(a,b))