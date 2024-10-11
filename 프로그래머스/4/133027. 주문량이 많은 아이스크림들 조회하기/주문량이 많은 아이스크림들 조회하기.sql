SELECT flavor
FROM (
    SELECT combined.flavor, sum(total_order) as total_order
    FROM (
        SELECT flavor, sum(total_order) as total_order
        FROM first_half
        GROUP BY flavor
        UNION ALL
        SELECT flavor, sum(total_order) as total_order
        FROM july
        GROUP BY flavor
    ) as combined
    GROUP BY combined.flavor
) as t
ORDER BY total_order desc
LIMIT 3