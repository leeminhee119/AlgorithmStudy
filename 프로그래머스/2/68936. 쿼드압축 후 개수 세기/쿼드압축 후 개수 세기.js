function solution(arr) {
    const n = arr.length;
    let [cnt0, cnt1] = arr.reduce((acc, cur) => {
        const count = cur.reduce((acc, cur) => {
            cur === 0 ? acc[0] ++ : acc[1] ++
            return acc;
        }, [0, 0])
        return acc.map((cnt, i) => cnt + count[i]);
    }, [0, 0])
                                  
    function quadSplit(arr, n, x, y) {
        if (n === 1) {
            return;
        }
        
        const res = checkAll(arr, n, x, y);
        if (res === false) {
            quadSplit(arr, n / 2, x, y);
            quadSplit(arr, n / 2, x, y + n / 2);
            quadSplit(arr, n / 2, x + n / 2, y);
            quadSplit(arr, n / 2, x + n / 2, y + n / 2);
        } else {
            res === 0 ? cnt0 = cnt0 - n * n + 1 : cnt1 = cnt1 - n * n + 1;
        }
    }
    
    function checkAll(arr, n, x, y) {
        const number = arr[x][y];
        for (let i = x; i < x + n; i++) {
            for (let j = y; j < y + n; j++) {
                if (arr[i][j] !== number) {
                    return false;
                }
            }
        }
        return number;
    }
    
    quadSplit(arr, n, 0, 0);
    
    return [cnt0, cnt1];
}