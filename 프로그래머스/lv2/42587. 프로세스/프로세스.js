function solution(priorities, location) {
    priorities = priorities.map((priority, priorityIndex) => ({ priority, target: priorityIndex === location }))
    let count = 0
    while (true) {
        const currentPriority = priorities.shift()
        if (Math.max(...priorities.map(({priority}) => priority)) > currentPriority.priority) {
            priorities.push(currentPriority)
        } else {
            count++
            if (currentPriority.target) return count
        }
    }
}