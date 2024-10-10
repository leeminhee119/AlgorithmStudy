-- 코드를 입력하세요
SELECT o.animal_id, o.animal_type, o.name
FROM animal_outs as o
JOIN animal_ins as i
ON o.animal_id = i.animal_id
WHERE i.sex_upon_intake like 'Intact%' and o.sex_upon_outcome not like 'Intact%'
ORDER BY o.animal_id