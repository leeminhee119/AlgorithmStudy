const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];

readline
  .on("line", function (line) {
    lines.push(line);
  })
  .on("close", function () {
    solution(lines);
    process.exit();
  });

function solution(lines) {
  class Heap {
    constructor() {
      this.heap = [];
    }
    getlength() {
      return this.heap.length;
    }
    getLeft(idx) {
      return idx * 2 + 1;
    }
    getRight(idx) {
      return idx * 2 + 2;
    }
    getParent(idx) {
      return Math.floor((idx - 1) / 2);
    }
    insert([key, val]) {
      this.heap.push([key, val]);
      this.heapifyUp();
    }
    remove() {
      const count = this.heap.length;
      if (count === 0) {
        return undefined;
      }
      const top = this.heap[0];
      if (count === 1) {
        this.heap = [];
      } else {
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
      }
      return top;
    }
    heapifyUp() {
      let idx = this.heap.length - 1;
      const lastNode = this.heap[idx];

      while (idx > 0) {
        const pIdx = this.getParent(idx);
        if (this.heap[pIdx][0] > lastNode[0]) {
          this.heap[idx] = this.heap[pIdx];
          idx = pIdx;
        } else break;
      }
      this.heap[idx] = lastNode;
    }
    heapifyDown() {
      let idx = 0;
      const rootNode = this.heap[0];
      const count = this.heap.length;
      while (this.getLeft(idx) < count) {
        const rIdx = this.getRight(idx);
        const lIdx = this.getLeft(idx);

        const cIdx =
          rIdx < count && this.heap[rIdx] < this.heap[lIdx] ? rIdx : lIdx;
        if (this.heap[cIdx][0] <= rootNode[0]) {
          this.heap[idx] = this.heap[cIdx];
          idx = cIdx;
        } else break;
      }
      this.heap[idx] = rootNode;
    }
  }

  const [V, E] = lines[0].split(" ").map(Number);
  const start = +lines[1];
  const paths = lines.slice(2).map((line) => line.split(" ").map(Number));
  const graph = Array.from({ length: V + 1 }, () => new Array());
  const dp = new Array(V + 1).fill(Infinity);
  paths.forEach(([u, v, w]) => {
    graph[u].push([v, w]);
  });

  function dijkstra(start) {
    const heap = new Heap();
    heap.insert([0, start]);
    dp[start] = 0;

    while (heap.getlength()) {
      const [dist, node] = heap.remove();
      if (dp[node] < dist) {
        continue;
      }
      for (const [v, w] of graph[node]) {
        const newCost = dist + w;
        if (newCost < dp[v]) {
          dp[v] = newCost;
          heap.insert([newCost, v]);
        }
      }
    }
  }

  dijkstra(start);
  console.log(dp.slice(1).join("\n").replaceAll(Infinity, "INF"));
}
