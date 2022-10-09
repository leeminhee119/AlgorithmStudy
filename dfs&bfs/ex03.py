#p149 part2 실전문제3. 음료수 얼려먹기
n,m = map(int,input().split())
graph = []
for i in range(n):
    graph.append(list(map(int,input())))

def dfs(graph, x,y):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    if x<0 or x>=n or y<0 or y>=m:
        return False
    if graph[x][y] == 0:
        graph[x][y] = 1
        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            dfs(graph, nx, ny)
        return True
    return False

count = 0
for i in range(n):
    for j in range(m):
        if dfs(graph, i,j) == True:
            count += 1
print(count)
print(graph)