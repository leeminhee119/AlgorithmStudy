-- 코드를 입력하세요
SELECT ins.name, ins.datetime
FROM animal_ins as ins
LEFT JOIN animal_outs as outs
ON ins.animal_id = outs.animal_id
WHERE outs.datetime is null
ORDER BY ins.datetime
LIMIT 3