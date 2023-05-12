# 프로그래머스 고득점 kit
# 네트워크

# 네트워크(연결된 하나의 덩어리) 개수를 구하는 문제
def solution(n, computers):
    answer = 0

    graph = [[] for _ in range(n)]
    for i in range(n):  # i번 컴퓨터
        for j in range(len(computers[i])):  # i번 컴퓨터와의 연결 정보 순회
            if j == i:  # 자기 자신
                continue
            if computers[i][j] == 1:
                graph[i].append(j)
    '''
    graph = [[1], [0], []]
    '''
    visited = [False for _ in range(n)]

    def dfs(graph, cur, visited):
        visited[cur] = True
        for number in graph[cur]:
            if not visited[number]:
                dfs(graph, number, visited)

    # 모든 노드 순회
    for i in range(n):
        # 방문하지 않은 노드에 대해서 dfs 돌리기
        if not visited[i]:
            dfs(graph, i, visited)  # dfs해주고 나면 연결된 애들은 다 방문이 됨
            answer += 1  # dfs 한 차례 돌리고 나면 그게 한 덩어리 (네트워크)
    return answer
