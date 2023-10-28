function getCountOne(str) {
    return Array.from(str).reduce((acc, cur) => {
        if (cur === '1') acc++;
        return acc
    }, 0)
}

function solution(n) {
    let nextNumber = n + 1;
    while (true) {
        if (getCountOne(nextNumber.toString(2)) === getCountOne(n.toString(2))) {
            break
        }
        nextNumber++;
    }
    return nextNumber;
}