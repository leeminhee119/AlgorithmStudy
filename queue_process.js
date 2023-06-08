// 1차 시도: 시간초과

class Queue {
  constructor(queue) {
    this.queue = queue;
    this.front = 0;
    this.rear = queue.length - 1;
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
  getMax() {
    return Math.max(this.queue);
  }
  getSize() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  var answer = 0; // 실행한 프로세스 개수
  // location의 프로세스가 실행될 때까지

  const myQueue = new Queue(priorities);

  while (myQueue.getSize() > 0) {
    let currMax = myQueue.getMax();
    let currPriority = myQueue.dequeue();

    if (location > 0) {
      // 꺼낸 원소가 location 원소가 아니라면
      location--;
      if (currPriority == currMax) {
        answer += 1; // 프로세스 실행
      } else {
        myQueue.enqueue(currPriority);
      }
    } else if (location == 0) {
      // 꺼낸 원소가 location 원소라면
      if (currPriority == currMax) {
        answer += 1;
        break;
      } else {
        myQueue.enqueue(currPriority);
        location = myQueue.getSize() - 1;
      }
    }
  }
  return answer;
}
