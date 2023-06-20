function solution(n)
{
    let sum = 0;
    
    Array.from(n.toString()).forEach((str) => {
        sum += parseInt(str);
    })
    return sum;
}