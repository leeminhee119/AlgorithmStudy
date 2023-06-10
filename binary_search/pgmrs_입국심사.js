// 입국심사
// https://school.programmers.co.kr/learn/courses/30/lessons/43238

function solution(n, times) {
  let start = 1;
  let end = Math.min(...times) * n;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    let possibleCnt = 0;
    for (time of times) {
      possibleCnt += Math.floor(mid / time);
    }
    console.log("possible", possibleCnt);
    if (possibleCnt < n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
}
