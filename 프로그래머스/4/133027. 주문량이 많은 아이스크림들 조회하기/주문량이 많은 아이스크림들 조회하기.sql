SELECT flavor
FROM (
    SELECT flavor, total_order
    FROM first_half
    UNION all
    SELECT flavor, total_order
    FROM july
) as unioned
GROUP BY flavor
ORDER BY SUM(total_order) desc
LIMIT 3