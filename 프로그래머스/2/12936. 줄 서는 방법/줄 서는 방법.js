function factorial (n) {
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function solution(n, k) {
    const numbers = Array.from({length: n}, (_, i) => i + 1);
    
    const result = [];
    function recursive(rest, order, cnt) {
        if (cnt === n) {
            result.push(rest[0]);
            return;
        }
        const groupCnt = factorial(n - cnt);
        const groupIdx = Math.floor(order / groupCnt);
        result.push(rest[groupIdx]);
        const leftover = order % groupCnt;
        recursive([...rest.slice(0, groupIdx), ...rest.slice(groupIdx + 1)], leftover, cnt + 1);
    }
    recursive(numbers, k - 1, 1);
    return result;
}