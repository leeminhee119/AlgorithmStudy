-- 코드를 입력하세요
SELECT p.product_id, p.product_name, sum(price * o.amount) as total_sales
FROM food_order as o
JOIN food_product as p
ON o.product_id = p.product_id
WHERE o.produce_date like '2022-05%'
GROUP BY o.product_id
ORDER BY total_sales desc, p.product_id