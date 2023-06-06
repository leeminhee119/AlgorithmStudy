// https://school.programmers.co.kr/learn/courses/30/lessons/42860
// 조이스틱

function solution(name) {
  let moveCnt = 0; // 이동횟수
  let changeCnt = 0; // 알파벳 변경 횟수

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const nameArr = name.split("");

  // 1. 첫 위치에서 왼쪽 이동할지 오른쪽 이동할지 결정
  let leftIdx = 0; // 왼쪽에서부터 A가 아닌 알파벳의 인덱스
  let rightReverseIdx = nameArr.length; // 오른쪽에서부터 A가 아닌 알파벳의 뒤에서부터 시작한 인덱스
  for (let i = 0; i < nameArr.length; i++) {
    if (nameArr[i] == "A") continue;
    else {
      leftIdx = i;
    }
  }
  for (let i = nameArr.length - 1; i > 0; i--) {
    if (nameArr[i] == "A") continue;
    else {
      rightReverseIdx = i;
    }
  }
  // 1. JAAAA -> leftIdx = 0, rightReverseIdx = 0
  // 2. JAAAB -> leftIdx = 4(idx), rightReverseIdx = 4(idx)
  // 3. JBBBB -> leftIdx = 4(idx), rightReverseIdx = 1
  // 3. JAABBA
  if (leftIdx == nameArr.length - 1) {
    if (rightReverseIdx == nameArr.length - 1) {
      moveCnt += 1;
    } else {
      moveCnt += leftIdx;
    }
  } else if (leftIdx !== 0 || rightReverseIdx !== 0) {
    moveCnt = Math.min(leftIdx, rightReverseIdx);
  }
  console.log(leftIdx, rightReverseIdx);
  console.log(moveCnt);
  // 알파벳 변경 숫자 카운트
  for (let i = 0; i < nameArr.length; i++) {
    let nameChar = nameArr[i];
    if (nameChar == "A") continue;
    else {
      let alphabetIdx = alphabets.findIndex((alph) => alph == nameChar);
      const alphabetsLength = alphabets.length;
      if (alphabetIdx <= parseInt(alphabetsLength / 2))
        changeCnt += alphabetIdx;
      else changeCnt += alphabetsLength - alphabetIdx;
    }
  }

  return moveCnt + changeCnt;
}
