function solution(bridge_length, weight, truck_weights) {
    const bridge = Array.from({length: bridge_length}, () => 0)
    let weight_sum = 0
    let time_count = 0
    time_count ++
    bridge.shift()
    weight_sum += truck_weights[0]
    bridge.push(truck_weights.shift())
    while (weight_sum > 0) {
        time_count ++
        
        weight_sum -= bridge.shift()
        
        if (truck_weights.length > 0 && weight_sum + truck_weights[0] <= weight) {
            weight_sum += truck_weights[0]
            bridge.push(truck_weights.shift())
        } else {
            bridge.push(0)
        }
    }
    return time_count
}