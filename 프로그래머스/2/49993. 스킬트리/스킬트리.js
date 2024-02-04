function solution(skill, skill_trees) {
    const skillArr = [...skill];
    let answer = 0;
    skill_trees.forEach((skill) => {
        let curOrder;
        let pass = true;
        for (let i = 0; i < skill.length; i++) {
            const curChar = skill[i];
            const order = skillArr.findIndex((el) => el === curChar);
            if (order === -1) continue;
            if (curOrder !== 0 && !curOrder) {
                if (order === 0) {
                    curOrder = order;
                    continue;
                } else {
                    pass = false;
                    break;
                }
            } else {
                if (order === curOrder + 1) {
                    curOrder = order;
                    continue;
                } else {
                    pass = false;
                    break;
                }
            }
        }
        answer += pass ? 1 : 0;
    })
    return answer;
}