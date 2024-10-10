-- 코드를 입력하세요
SELECT p.product_code, SUM(p.price * s.sales_amount) as sales
FROM product as p
JOIN offline_sale as s
ON p.product_id = s.product_id
GROUP BY p.product_id
ORDER BY sales desc, product_code