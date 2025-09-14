function solution(numbers) {
    // 숫자를 문자열로 바꿔서 정렬
    let result = numbers
        .map(String)
        .sort((a, b) => (b + a) - (a + b)) // 두 수를 붙여서 비교
        .join('');

    // 모든 값이 0이면 "0" 리턴
    return result[0] === '0' ? '0' : result;
}