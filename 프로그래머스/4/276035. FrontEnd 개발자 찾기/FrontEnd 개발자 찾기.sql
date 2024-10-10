-- 코드를 작성해주세요
SELECT d.id, d.email, d.first_name, d.last_name
FROM developers as d
JOIN skillcodes as s
ON (d.skill_code & s.code) > 0
WHERE s.category = 'Front End'
GROUP BY d.id, d.email, d.first_name, d.last_name
ORDER BY d.id