function solution(fees, records) {
    const [standardTime, standardFee, perTime, perFee] = fees;
    const carTimes = new Map();
    records.forEach((record) => {
        let [time, car, status] = record.split(' ');
        const [hour, minute] = time.split(':').map(Number);
        const minutes = hour * 60 + minute;
        car = parseInt(car);
        const times = carTimes.get(car);
        if (times) {
            times.push(minutes);
            carTimes.set(car, times);
        } else {
            carTimes.set(car, [minutes]);
        }
    })
    
    for (const [car, times] of carTimes) {
        carTimes.set(car, getFee(times));
    }
    
    const resultArr = [...carTimes];
    return resultArr.sort((a, b) => a[0] - b[0]).map((arr) => arr[1])
    
    
    function getFee(times) {
        const LAST_TIME = 23 * 60 + 59;
        let totalTime = 0;
        for (let i = 0; i < times.length; i += 2) {
            const inTime = times[i];
            const outTime = times[i + 1];
            if (!outTime) {
                totalTime += LAST_TIME - inTime;
                break;
            }
            totalTime += outTime - inTime;
        }
        return totalTime > standardTime ? standardFee + Math.ceil((totalTime - standardTime) / perTime) * perFee : standardFee;
    }
}