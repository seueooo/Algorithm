function solution(arr)
{
    var answer = [];

    for (let i =0; i<arr.length; i++) {
        if (i===0) {
        answer.push(arr[i]);
        }
        if (arr[i] === answer.at(-1)){
            continue;
        } else {
            answer.push(arr[i])
        }
    }
    
    console.log(answer);
    
    return answer;
}