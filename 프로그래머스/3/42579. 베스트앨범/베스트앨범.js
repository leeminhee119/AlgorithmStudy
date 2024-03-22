function solution(genres, plays) {
    const songs = []
    
    const genrePlays = genres.reduce((acc, cur, idx) => {
        if (!acc[cur]) {
            acc[cur] = plays[idx];
        } else {
            acc[cur] += plays[idx];
        }
        return acc;
    }, {})
    
    for (let i = 0; i < genres.length; i++) {
        songs.push({
            genre: genres[i],
            play: plays[i],
            number: i
        })    
    }
    
    
    songs.sort((a, b) => b.play - a.play).sort((a, b) => genrePlays[b.genre] - genrePlays[a.genre])
    const countDic = {}
    const bestAlbum = []
    songs.forEach(({genre, number}) => {
        if (countDic[genre] >= 2) {
            console.log(countDic[genre]);
            return;
        }
        if (!countDic[genre]) {
            countDic[genre] = 1
        } else {
            countDic[genre] ++;
        }
        bestAlbum.push(number)
    })
    return bestAlbum
}