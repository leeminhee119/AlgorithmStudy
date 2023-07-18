function getBinaryString(targetLength, number) {
    const binaryString = number.toString(2)
    return '0'.repeat(targetLength - binaryString.length) + binaryString
}

function solution(n, arr1, arr2) {
    const map1 = arr1.map(number => getBinaryString(n, number)) // [9, 20, 28, 18, 11] -> ['01001', '10100', '10010', '01011']
    const map2 = arr2.map(number => getBinaryString(n, number))
    
    return map1.reduce((mapArray, currRow, rowIndex) => { // 한 행씩 순회
        return [...mapArray, 
                currRow.split('').reduce((rowString, currItem, colIndex) => { // 현재 순회 중인 행의 한 칸(currItem)씩 순회, 해당 행렬의 값을 map2에서도 가져온다.
                    if (parseInt(currItem) + parseInt(map2[rowIndex][colIndex]) > 0) return rowString + '#' // 둘 중 하나라도 1이면 #
                    return rowString + ' '
                }, '')]
    }, [])
}