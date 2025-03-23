function solution(x) {
    var answer = true;
    let sum = 0;
    const input = x;

    while (x>0) {
        sum += x%10;
        x = Math.floor(x/10);
        
    }
    if (input % sum ==0) {
    answer = true;
    } else {
        answer = false;
    }
    return answer;
}