const fs = require("fs");
const files = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const filesCnt = +files.shift();

const itemMap = files.reduce((extMap, cur) => {
  const item = cur.split(".")[1];
  const itemCnt = extMap.get(item);
  if (!itemCnt) {
    extMap.set(item, 1);
  } else {
    extMap.set(item, itemCnt + 1);
  }
  return extMap;
}, new Map());

const itemArr = [...itemMap].sort();
const answer = [];
for (const item of itemArr) {
  answer.push(`${item[0]} ${item[1]}`);
}
console.log(answer.join("\n"));
