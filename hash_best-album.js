// 프로그래머스 - 해시 - 베스트앨범

function solution(genres, plays) {
  const hashObjArr = [];
  for (let i = 0; i < genres.length; i++) {
    hashObjArr.push({ genre: genres[i], play: plays[i], number: i });
  }
  hashObjArr.sort((obj1, obj2) => obj2.play - obj1.play); // 재생횟수 기준 내림차순 정렬

  const hashGenrePlays = hashObjArr.reduce((genrePlays, cur) => {
    if (cur.genre in genrePlays) {
      genrePlays[cur.genre] += cur.play;
    } else {
      genrePlays[cur.genre] = cur.play;
    }
    return genrePlays;
  }, {}); // 장르별 재생횟수를 담은 해시테이블

  const sortedGenrePlaysArrArr = Object.entries(hashGenrePlays).sort(
    (genrePlay1, genrePlay2) => genrePlay2[1] - genrePlay1[1]
  ); // 해시테이블을 장르의 재생횟수 기준 내림차순 정렬

  hashObjArr.sort((obj1, obj2) => {
    let obj1Order = sortedGenrePlaysArrArr.findIndex((genrePlaysArr) => {
      return genrePlaysArr[0] == obj1.genre;
    });
    let obj2Order = sortedGenrePlaysArrArr.findIndex((genrePlaysArr) => {
      return genrePlaysArr[0] == obj2.genre;
    });
    return obj1Order - obj2Order;
  });

  const cntGenre = {};
  const answer = [];
  for (hashObj of hashObjArr) {
    if (!Object.keys(cntGenre).includes(hashObj.genre)) {
      cntGenre[hashObj.genre] = 1;
    } else {
      cntGenre[hashObj.genre] += 1;
    }
    if (cntGenre[hashObj.genre] <= 2) {
      answer.push(hashObj.number);
    }
  }
  return answer;
}
