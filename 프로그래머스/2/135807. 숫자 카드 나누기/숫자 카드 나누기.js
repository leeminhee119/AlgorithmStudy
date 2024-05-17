function solution(arrayA, arrayB) {
    const GCD = (n1, n2) => n2 > 0 ? GCD(n2, n1 % n2) : n1;
    const size = arrayA.length;
    
    const GCDA = arrayA.reduce((gcd, e) => GCD(gcd, e));
    const GCDB = arrayB.reduce((gcd, e) => GCD(gcd, e));
    
    const answerA = arrayB.every((el) => el % GCDA !== 0) ? GCDA : 0;
    const answerB = arrayA.every((el) => el % GCDB !== 0) ? GCDB : 0;
    return Math.max(answerA, answerB);
}