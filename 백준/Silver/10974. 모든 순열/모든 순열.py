n = int(input())

# 순열을 계산하고자 하는 원소가 담긴 배열
arr = [i for i in range(1,n+1)]

# 방문 여부 체크
visited = [False for i in range(n)]

# 현재 순열에 포함된 원소의 index
selected = []
result_list = []

def dfs(arr, depth):
    # 모든 순열을 확인하고
    if depth == n:
        # 순열 결과 저장
        line = ' '.join(str(arr[x]) for x in selected)
        result_list.append(line)
        return
    # 하나씩 원소 인덱스 확인하고
    for i in range(n):
        if visited[i]:
            continue
        # 현재 원소 선택
        selected.append(i)
        # 현재 원소 방문 처리
        visited[i] = True
        # 재귀 함수 호출
        dfs(arr, depth+1)
        # 현재 원소 선택 취소
        selected.pop()
        visited[i] = False


#재귀함수 호출
dfs(arr,0)

print(*result_list, sep='\n')