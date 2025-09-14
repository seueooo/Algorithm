function solution(s) {
    var answer = '';
    
    const nums = (s.split(' ')).map(Number);
    nums.sort((a,b)=>a-b);
    const maxNum = Math.max(...nums);
    const minNum = Math.min(...nums);
    answer = (minNum + ' ' + maxNum);
    
    return answer;
}