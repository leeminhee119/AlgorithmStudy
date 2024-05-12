function comb(arr, r) {
    if (r === 1) {
        return arr.map(el => [el]);
    }
    const results = [];
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = comb(rest, r - 1);
        const attached = combinations.map((el) => [...el, fixed]);
        results.push(...attached);
    })        
    return results;
}

function isSameArr(arr1, arr2) {
    return arr1.every((el, i) => el === arr2[i]);
}

function getMostCommon(arr) {
    if (arr.length === 1) {
        return [];
    }
    let result = [];
    arr.sort();
    let curCnt = 0;
    let max = curCnt;
    let curComb = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (isSameArr(arr[i], curComb)) {
            curCnt ++;
            continue;
        }
        if (curCnt === max) {
            result.push(curComb);
        }
        if (curCnt > max) {
            result = [curComb];
            max = curCnt;
        }
        curComb = arr[i];
        curCnt = 1;
    }
    if (curCnt === max) {
        result.push(curComb);
    }
    if (curCnt > max) {
        result = [curComb];
        max = curCnt;
    }
    return max > 1 ? result : [];
}

function solution(orders, course) {
    const result = [];
    orders = orders.map((order) => order.split('').sort());
    course.forEach((cnt) => {
        const cand = [];
        orders.forEach((order) => {
            cand.push(...comb(order, cnt));
        })
        result.push(...getMostCommon(cand));
    })
    return result.map((arr) => arr.sort().join('')).sort();
}