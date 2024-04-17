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

function solution(x, y, n) {
    const calculations = [(x) => x + n, (x) => 2 * x, (x) => 3 * x];
    const visited = Array.from({length: y}, () => false);
    let answer = 1000000000;
    let flag = false;
    function bfs(number) {
        const queue = new Queue();
        queue.enqueue([number, 0]);
        while (queue.size()) {
            const [curNum, cnt] = queue.dequeue();
            if (curNum === y) {
                flag = true;
                answer = Math.min(answer, cnt);
                continue;
            }
            for (let i = 0; i < calculations.length; i++) {
                const nextNum = calculations[i](curNum);
                if (nextNum > y) continue;
                if (visited[nextNum]) continue;
                queue.enqueue([nextNum, cnt + 1]);
                visited[nextNum] = true;
            }
        }
    }
    bfs(x);
    return flag ? answer : -1;
}