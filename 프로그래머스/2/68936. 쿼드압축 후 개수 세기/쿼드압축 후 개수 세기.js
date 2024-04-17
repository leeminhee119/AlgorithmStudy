function solution(arr) {
    function checkAll(start, size) {
        const [x, y] = start;
        const num = arr[x][y];
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (arr[i][j] !== num) return false;
            }
        }
        return true;
    }
    
    let [cnt0, cnt1] = arr.reduce((dict, numbers) => {
        const [cnt0, cnt1] = numbers.reduce((acc, cur) => {
            cur ? acc[1]++ : acc[0]++;
            return acc;
        }, [0, 0]);
        return [dict[0] + cnt0, dict[1] + cnt1];
    }, [0, 0]);
    
    function check(start, size) {
        if (size === 1) return;
        const isEqual = checkAll(start, size);
        const [x, y] = start;
        if (isEqual) {
            arr[x][y] === 0 ? cnt0 = cnt0 - size * size + 1 : cnt1 = cnt1 - size * size + 1;
        } else {
            check([x, y], size / 2);
            check([x + size / 2, y], size / 2);
            check([x, y + size / 2], size / 2);
            check([x + size / 2, y + size / 2], size / 2);
        }
    }
    
    check([0, 0], arr.length);
    return [cnt0, cnt1];
}