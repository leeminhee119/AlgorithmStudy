// 프로그래머스_프린터
// 3차시도: 정답
/* 
1. 큐 클래스를 처음부터 constructor를 통해 초기화하지 말고, 하나씩 enqueue하자.
2. 배열로 구현한 큐 클래스의 메소드로 Math.max를 사용하면,  배열의 빈 값까지 Math.max 메소드 함수 내에 들어가게 된다.
따라서 그냥 내림차순 정렬해서 최대값을 알아내자
*/

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
  getSize() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  var answer = 0; // 실행한 프로세스 개수
  // location의 프로세스가 실행될 때까지

  const myQueue = new Queue();
  priorities.forEach((priority) => {
    myQueue.enqueue(priority);
  });

  priorities.sort((a, b) => b - a);

  while (myQueue.getSize() > 0) {
    let currMax = priorities[answer];
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
