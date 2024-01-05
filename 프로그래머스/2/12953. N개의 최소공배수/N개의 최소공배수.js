function GCD(num1, num2) {
    return (num2 > 0 ? GCD(num2, num1 % num2) : num1)
}

function solution(arr) {
    let answer = 1;
    let currentLCM = GCD(arr[0], arr[1]) * arr[0] / GCD(arr[0], arr[1]) * arr[1] / GCD(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        const currentGCD = GCD(currentLCM, arr[i])
        currentLCM = currentGCD * (currentLCM / currentGCD) * (arr[i] / currentGCD)
    }
    return currentLCM;
}