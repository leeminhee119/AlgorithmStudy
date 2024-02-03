
function solution(scoville, k) {
    const scovilleHeap = new Heap();
    scoville.forEach(el => scovilleHeap.heappush(el));
    let count = 0;
    while (scovilleHeap.heap.length >= 2 && scovilleHeap.heap[0] < k) {
        const first = scovilleHeap.heappop();
        const second = scovilleHeap.heappop();
        const newNum = first + second * 2;
        scovilleHeap.heappush(newNum);
        count++;
    }
    return scovilleHeap.heap[0] >= k ? count : -1;
}

class Heap {
  constructor() {
    this.heap = [];
  }

  heappush(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  heappop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    if (this.heap.length === 0) {
      return null;
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let childIdx = this.heap.length - 1;
    let parIdx = (childIdx / 2) >> 0;
    
    while (this.heap[childIdx] < this.heap[parIdx]) {
      [this.heap[childIdx], this.heap[parIdx]] = [this.heap[parIdx], this.heap[childIdx]];
      childIdx = parIdx;
      parIdx = (childIdx / 2) >> 0;
    }
  }

  bubbleDown() {
    let parIdx = 0;
    let leftIdx = parIdx * 2;
    let rightIdx = parIdx * 2 + 1;

    while ((leftIdx <= this.heap.length - 1 && this.heap[leftIdx] < this.heap[parIdx]) || 
          (rightIdx <= this.heap.length - 1 && this.heap[rightIdx] < this.heap[parIdx])) {
      if (rightIdx <= this.heap.length - 1 && this.heap[leftIdx] > this.heap[rightIdx]){
        [this.heap[rightIdx], this.heap[parIdx]] = [this.heap[parIdx], this.heap[rightIdx]];
        parIdx = rightIdx;
      } else {
        [this.heap[leftIdx], this.heap[parIdx]] = [this.heap[parIdx], this.heap[leftIdx]];
        parIdx = leftIdx;
      }
      leftIdx = parIdx * 2;
      rightIdx = parIdx * 2 + 1;
    }
  }
}