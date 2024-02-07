function solution(files) {
    const newFiles = files.map((file) => {
        let firstNumberIdx;
        let firstTailIdx = file.length;
        let isNumberFlag = false;
        for (let i = 0; i < file.length; i++) {
            if (/\d/g.test(file[i])) {
                if (!isNumberFlag) {
                    firstNumberIdx = i;
                    isNumberFlag = true;
                } else if (i >= firstNumberIdx + 5) {
                    firstTailIdx = i;
                    break;
                }
            } else {
                if (isNumberFlag) {
                    firstTailIdx = i;
                    break;
                }
            }
        }
        const HEAD = file.slice(0, firstNumberIdx);
        const NUMBER = file.slice(firstNumberIdx, Math.min(firstNumberIdx + 5, firstTailIdx));
        const TAIL = file.slice(firstTailIdx);
        return {
            HEAD,
            NUMBER,
            TAIL,
        }
    })
    newFiles.sort((a, b) => Number(a.NUMBER) - Number(b.NUMBER));
    newFiles.sort((a, b) => {
        if (a.HEAD.toLowerCase() < b.HEAD.toLowerCase()) {
            return -1;
        } else if (a.HEAD.toLowerCase() > b.HEAD.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    return newFiles.map((file) => file.HEAD + file.NUMBER + file.TAIL);
}