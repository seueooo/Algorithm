function solution(phone_book) {
    var answer = true;
    let table = [];
    for (const number of phone_book) {
        table[number] = true;
    }
    
    for (const number of phone_book) {
        for (let i = 0; i<number.length; i++){
            const subStr = number.slice(0,i);
            if (table[subStr]===true) {
                answer = false;
                return answer;
            }
        }
    }
    return answer;
}