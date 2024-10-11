-- 코드를 작성해주세요

SELECT d.id, d.email, d.first_name, d.last_name
FROM developers as d
JOIN skillcodes as sc
ON (d.skill_code & sc.code) > 0
WHERE sc.category = 'Front End'
GROUP BY d.id, d.email, d.first_name, d.last_name
ORDER BY d.id