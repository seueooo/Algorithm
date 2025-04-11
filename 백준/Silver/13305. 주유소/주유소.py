n = int(input())
distance = list(map(int,input().split()))
price = list(map(int, input().split()))
price.pop()

result = 0

min_price_index = price.index(min(price))

for i in range(n-1):
    if(min_price_index<=i):
        result+=price[min_price_index]*(distance[i])
    else:
        result+=price[i]*distance[i]


print(result)