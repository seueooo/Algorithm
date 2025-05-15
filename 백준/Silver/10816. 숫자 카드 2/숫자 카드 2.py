import sys
from collections import Counter

input = sys.stdin.readline

n = int(input())

my_num = list(map(int, input().split()))
my_num.sort()

m = int(input())
card_num = list(map(int, input().split()))

num_counter = Counter(my_num)

result_dict = {}

for card in card_num:
    # 키(card)가 없으면 default_value(0) 반환
    # key에 해당하는 값을 get 메소드로 가져옴
    result_dict[card] = num_counter.get(card, 0)

for i in card_num:
    print(result_dict[i], end=' ')