-- 코드를 입력하세요
SELECT M.MEMBER_ID, M.MEMBER_NAME, M.GENDER, DATE_FORMAT(M.DATE_OF_BIRTH, '%Y-%m-%d') as DATE_OF_BIRTH
FROM MEMBER_PROFILE AS M
WHERE M.GENDER = 'W' AND MONTH(M.DATE_OF_BIRTH) = 3 AND M.TLNO IS NOT NULL
ORDER BY M.MEMBER_ID