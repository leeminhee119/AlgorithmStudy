function solution(want, number, discount) {
    let count = 0;
    for (let i = 0; i <= discount.length - 10; i++) {
        const curDiscount = discount.slice(i, i + 10);
        let flag = true;
        for (let j = 0; j < want.length; j++) {
            const item = want[j];
            if (number[j] !== curDiscount.reduce((acc, cur) => cur === item ? acc + 1 : acc, 0)) {
                flag = false;
                break;
            }
        }
        if (flag) {
            count ++;
        }
    }
    return count;
}