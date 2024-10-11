-- 코드를 입력하세요
SELECT c.car_id, c.car_type, floor(c.daily_fee * 30 * ((100 - cast(replace(coalesce(d.discount_rate, '0%'), '%', '') as float)) / 100)) as fee
FROM car_rental_company_car as c
LEFT JOIN car_rental_company_rental_history as h
ON c.car_id = h.car_id
LEFT JOIN car_rental_company_discount_plan as d
ON c.car_type = d.car_type
WHERE 
    c.car_id not in (
        SELECT car_id
        FROM car_rental_company_rental_history
        WHERE start_date <= '2022-11-30' and end_date >= '2022-11-01'
    ) and
    (d.duration_type = '30일 이상' or d.duration_type is null) and
    c.car_type in ('세단', 'SUV') and
    floor(c.daily_fee * 30 * ((100 - cast(replace(coalesce(d.discount_rate, '0%'), '%', '') as float)) / 100)) >= 500000 and floor(c.daily_fee * 30 * ((100 - cast(replace(coalesce(d.discount_rate, '0%'), '%', '') as float)) / 100)) < 2000000
GROUP BY c.car_id, c.car_type, fee
ORDER BY fee desc, c.car_type, c.car_id desc