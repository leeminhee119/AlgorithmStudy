# group by를 집계함수와 함께 쓰면 집계함수 부분에 필요한 데이터는 알아서 그룹핑된다?
SELECT p.product_code, sum(p.price * o.sales_amount) as sales
FROM product as p
JOIN offline_sale as o
ON p.product_id = o.product_id
GROUP BY p.product_code
ORDER BY sales desc, p.product_code