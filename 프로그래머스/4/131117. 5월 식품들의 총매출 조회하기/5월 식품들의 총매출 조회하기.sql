-- 코드를 입력하세요
SELECT p.product_id, p.product_name, p.price * sum(coalesce(o.amount, 0)) as TOTAL_SALES
FROM food_product as p
JOIN food_order as o
ON p.product_id = o.product_id AND year(o.produce_date) = 2022 AND month(o.produce_date) = 5
GROUP BY p.product_id
ORDER BY TOTAL_SALES desc, p.product_id