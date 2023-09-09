function solution(tickets) {
    tickets.sort()
    let answer;
    const path = [];
    const ticketsLen = tickets.length;
    const used = Array.from({length: ticketsLen}, () => false)
    const dfs = (start, count) => {
        path.push(start)
        
        if (count === ticketsLen) {
            answer = path;
            return true;
        }
        
        for (let i = 0; i < ticketsLen; i++) {
            if (!used[i] && tickets[i][0] === start) {
                used[i] = true;
                
                if (dfs(tickets[i][1], count + 1)) return true;
                
                used[i] = false;
            }
        }
        
        path.pop();
        return false;
    }
    
    dfs("ICN", 0)
    
    return answer;
}