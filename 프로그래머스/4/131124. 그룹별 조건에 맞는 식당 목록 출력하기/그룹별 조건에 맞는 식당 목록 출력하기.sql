-- 코드를 입력하세요
SELECT m.member_name, r.review_text, date_format(r.review_date, '%Y-%m-%d') as review_date
FROM member_profile as m
JOIN rest_review as r
ON m.member_id = r.member_id
WHERE m.member_id in (SELECT member_id FROM (
    SELECT m.member_id, count(r.review_id) as cnt
    FROM rest_review as r
    LEFT JOIN member_profile as m
    ON r.member_id = m.member_id
    GROUP BY r.member_id
    ORDER BY cnt desc
    LIMIT 1
) as t)
ORDER BY review_date, review_text
    
