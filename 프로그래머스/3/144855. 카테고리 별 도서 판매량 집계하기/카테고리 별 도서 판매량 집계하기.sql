-- 코드를 입력하세요
SELECT b.category, sum(s.sales) as total_sales
FROM book as b
JOIN book_sales as s
ON b.book_id = s.book_id
WHERE s.sales_date like '2022-01%'
GROUP BY b.category
ORDER BY b.category
