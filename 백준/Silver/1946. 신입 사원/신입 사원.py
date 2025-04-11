t = int(input())
answer = []

for _ in range(t):
    result = 1
    n = int(input())
    scores = []
    for _ in range(n):
        score_a, score_b = map(int, input().split())
        scores.append((score_a, score_b))
    scores.sort(key=lambda x: (x[0]))

    min_score_rank = scores[0][1]

    for i in range(1,n):
        if (scores[i][1]<min_score_rank):
            result+=1
            min_score_rank = scores[i][1]
    answer.append(result)


print(*answer, sep='\n')