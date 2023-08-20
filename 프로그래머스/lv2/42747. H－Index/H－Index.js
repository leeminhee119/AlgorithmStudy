function solution(citations) {
    const sortedCitations = citations.sort((a, b) => b - a)
    for (let i = 0; i < sortedCitations.length; i++) {
        const currentCitation = sortedCitations[i]
        // i + 1: currentCitation번 이상 인용된 논문의 개수
        if (i + 1 === currentCitation) return currentCitation
        else if (i + 1 > currentCitation) return i
    }
    return citations.length
}