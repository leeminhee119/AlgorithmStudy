function replaceInfo(info) {
    return info.replaceAll('C#', 'Z').replaceAll('D#', 'Y').replaceAll('F#', 'X').replaceAll('G#', 'W').replaceAll('A#', 'U').replaceAll('B#', 'T')
} 

function solution(m, musicinfos) {
    const musicInfoArr = musicinfos.map((str) => replaceInfo(str).split(',')).map((arr) => {
        let [start, end, title, info] = arr;
        const [sH, sM] = start.split(':').map(Number);
        const [eH, eM] = end.split(':').map(Number);
        const playtime = (eH * 60 + eM) - (sH * 60 + sM);
        info = info.repeat(Math.ceil(playtime / info.length)).slice(0, playtime)
        return [playtime, title, info];
    })
    musicInfoArr.sort((a, b) => b[0] - a[0]);
    
    const targetArr = musicInfoArr.find(([, , musicInfo]) => musicInfo.includes(replaceInfo(m)));

    return targetArr ? targetArr[1] :  '(None)'
}