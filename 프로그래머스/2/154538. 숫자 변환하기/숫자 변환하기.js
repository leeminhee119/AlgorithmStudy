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
    if (this.rear <= this.front) return;
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }
  peek() {
    return this.queue[this.front];
  }
  size() {
    return this.rear - this.front;
  }
}

// BFS, DFS로 풀다가 시간초과가 나온다면 DP를 고려해보자.
function solution(x, y, n) {
    const dp = Array.from({length: y * 3}, () => false);
    const queue = new Queue();
    queue.enqueue([x, 0]);
    dp[x] = true;
    while (queue.size()) {
        const [cur, cnt] = queue.dequeue();
        if (cur === y) {
            return cnt;
        } else if (cur > y) {
            continue;
        }
        if (!dp[cur + n]) {
            queue.enqueue([cur + n, cnt + 1]);
            dp[cur + n] = true;
        }
        if (!dp[cur * 2]) {
            queue.enqueue([cur * 2, cnt + 1]);
            dp[cur * 2] = true;
        }
        if (!dp[cur * 3]) {
            queue.enqueue([cur * 3, cnt + 1]);
            dp[cur * 3] = true;
        }
    }
    return -1;
}