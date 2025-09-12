function solution(array, commands) {
    var answer = [];
    for (const n of commands) {
        const [i, j, k] = n;
        const tmp = array.slice(i-1,j);
        tmp.sort((a,b)=>a-b);
        answer.push(tmp[k-1]);
    }
    
    return answer;
}