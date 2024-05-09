function solution(n) {
    let i = 0;
    let j = 0;
    const pyramid = Array.from({length: n}, (_, i) => new Array(i + 1).fill(0));
    let number = 1;
    pyramid[i][j] = number;
    while (number < n * (n + 1) / 2) {
        while (i + 1 < n && pyramid[i + 1][j] === 0) {
            i++;
            number++;
            pyramid[i][j] = number;
        }
        while (j + 1 < n && pyramid[i][j + 1] === 0) {
            j++;
            number++;
            pyramid[i][j] = number;
        }
        while (i - 1 > 0 && j - 1 > 0 && pyramid[i - 1][j - 1] === 0) {
            i--;
            j--;
            number++;
            pyramid[i][j] = number;
        }
    }
    return pyramid.flat()
}