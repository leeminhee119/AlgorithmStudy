-- 코드를 입력하세요
SELECT year(s.sales_date) as year, month(s.sales_date) as month, count(distinct s.user_id) as purchased_users, round(count(distinct s.user_id) / (SELECT count(*) FROM user_info WHERE year(joined) = 2021), 1) as purchased_ratio
FROM user_info as u
JOIN online_sale as s
ON s.user_id = u.user_id
WHERE year(u.joined) = 2021
GROUP BY year, month
ORDER BY year, month