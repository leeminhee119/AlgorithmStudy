function solution(operations) {
    const queue = [];
    operations.forEach((operation) => {
        if (operation[0] === 'D') {
            const deleteType = operation.split(' ')[1];
            if (deleteType > 0) {
                queue.splice(queue.indexOf(Math.max(...queue)), 1);
            } else {
                queue.splice(queue.indexOf(Math.min(...queue)), 1)
            }
        } else {
            const newNum = Number(operation.split(' ')[1]);
            queue.push(newNum);
        }
    })
    return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}