function solution(arr) {
    const stk = arr.reduce((stk, cur, i) => {
        if (stk.length === 0) stk.push(cur)
        else if (stk[stk.length - 1] === cur) stk.pop()
        else stk.push(cur)
        return stk;
    }, [])
    return stk.length === 0 ? [-1] : stk
}