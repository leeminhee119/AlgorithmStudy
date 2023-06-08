// 프로그래머스 가장 먼 노드

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }
  size() {
    return this.rear - this.front;
  }
}

function getDistances(start, graph) {
  const visited = []; // 방문한 정점들을 담습니다.
  const distance = []; // 정점 i(인덱스)까지의 최단경로를 담습니다.
  distance[start] = 0;
  const queue = new Queue();
  queue.enqueue(start);

  //BFS (최단경로)
  while (queue.size()) {
    const curNode = queue.dequeue();
    visited.push(curNode);
    for (nextNode of graph[curNode]) {
      // 인접 노드들을 순회
      if (!visited.includes(nextNode)) {
        // 미방문한 노드라면,
        distance[nextNode] = distance[curNode] + 1;
        queue.enqueue(nextNode);
        visited.push(nextNode);
      }
    }
  }
  return distance;
}
function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  for (e of edge) {
    graph[e[0]].push(e[1]);
    graph[e[1]].push(e[0]);
  }
  const distances = getDistances(1, graph);
  const maxDistance = distances.sort((a, b) => b - a)[0]; // 배열 내에 empty가 있기 때문에 Math.max를 이용하지 않습니다.
  const count = distances.reduce(
    (acc, distance) => (distance === maxDistance ? acc + 1 : acc),
    0
  );
  return count;
}
