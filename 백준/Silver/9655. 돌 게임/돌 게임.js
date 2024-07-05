const lines = [];
require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
}).on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const N = +lines[0];
    console.log(N % 2 === 0 ? 'CY' : 'SK');
    process.exit();
})