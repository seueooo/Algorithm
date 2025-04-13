n = int(input())
h = list(map(int,input().split()))

# 공중에 떠있는 화살의 개수, 인덱스는 화살의 높이
floating = [0]*10000001


for height in h:

    # 떠 있는 화살이 있다면
    if floating[height] > 0:
        # 그 화살 중 하나를 바로 아래 높이로 이동시킨다.
        floating[height]-=1
        floating[height-1]+=1
    else:
        # 없다면 화살 쏘기
        floating[height-1]+=1


print(sum(floating))