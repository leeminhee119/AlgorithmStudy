class Queue {
    constructor(arr) {
        this.queue = arr;
        this.front = 0;
        this.rear = arr.length;
    }
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    dequeue() {
        if (this.rear <= this.front) return;
        const target = this.queue[this.front];
        this.front++;
        return target;
    }
    size() {
        return this.rear - this.front;
    }
}

function solution(queue1, queue2) {
    // const q1 = new Queue(queue1);
    // const q2 = new Queue(queue2);
    const [q1Len, q2Len] = [queue1.length, queue2.length];
    let q1Sum = queue1.reduce((acc, cur) => acc + cur, 0);
    let q2Sum = queue2.reduce((acc, cur) => acc + cur, 0);
    let q1Cnt = 0;
    let q2Cnt = 0;
    let q1First = 0;
    let q2First = 0;
    let flag = false;
    while (q1Cnt < q1Len || q2Cnt < q2Len) {
        if (q1Sum === q2Sum) {
            flag = true;
            break;
        }
        if (q1Sum > q2Sum) {
            // const target = q1.dequeue();
            // q2.enqueue(target);
            const target = queue1[q1First++];
            queue2.push(target);
            q2Sum += target;
            q1Sum -= target;
            q1Cnt++;            
        } else {
            // const target = q2.dequeue();
            // q1.enqueue(target);
            const target = queue2[q2First++];
            queue1.push(target);
            q1Sum += target;
            q2Sum -= target;
            q2Cnt++;       
        }
    }
    return flag ? q1Cnt + q2Cnt : -1;
}