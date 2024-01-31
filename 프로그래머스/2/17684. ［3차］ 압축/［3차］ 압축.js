function solution(msg) {
    const dictionary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = [];
    
    let i = 0;
    let number;
    while (i < msg.length ) {
        let seq = msg[i];
        while (dictionary.includes(seq)) {
            i++;
            number = dictionary.indexOf(seq) + 1;
            if (i > msg.length - 1) {
                break;
            }
            seq += msg[i];
        }
        dictionary.push(seq);
        numbers.push(number);
    }
    return numbers;
}