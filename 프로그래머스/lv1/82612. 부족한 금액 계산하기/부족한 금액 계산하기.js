function solution(price, money, count) {
    const countRangeArr = Array.from({length: count}, (v, i) => i + 1) // 1부터 count까지의 숫자를 담은 배열
    const totalPrice = countRangeArr.reduce((acc, cur) => {
        return acc + price * cur
    }, 0)
    return totalPrice - money > 0 ? totalPrice - money : 0
}