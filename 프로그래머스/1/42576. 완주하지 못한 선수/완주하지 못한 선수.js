function solution(participant, completion) {
    let answer = '';
    map = {};
    
    // 참가자들 추가
    for (let name of participant) {
        map[name] = (map[name]||0) +1
    }
    
    // 완료자들 제거
    for (let name of completion) {
        map[name]--;
    }
    
    // 남은 사람들 반환
    for (let name in map) {
        if (map[name] > 0) {
            return name;
        }
    }
    
}