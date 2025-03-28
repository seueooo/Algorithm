function solution(s){
    var answer = true;
    stack = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('(')
        }
        else if (s[i]===')') {
            if (stack.length>0) {
                stack.pop()
            } else {
                answer = false;
                break;
            }
        }
    }
    
    if (stack.length > 0) {
            answer = false;
        } 
    return answer;
}