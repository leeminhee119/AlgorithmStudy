-- 코드를 입력하세요
SELECT outs.animal_id, outs.name
FROM animal_outs as outs
JOIN animal_ins as ins
ON outs.animal_id = ins.animal_id
WHERE outs.DATETIME < ins.DATETIME
ORDER BY ins.DATETIME