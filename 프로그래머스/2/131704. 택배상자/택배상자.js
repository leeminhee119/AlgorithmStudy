function solution(order) {
    const support = [];
    let index = 0;
    for (let box = 1; box < order.length + 1; box++) {
        support.push(box);
        while (support.length > 0 && order[index] === support[support.length - 1]) {
            support.pop();
            index++;
        }
    }
    return index;
}