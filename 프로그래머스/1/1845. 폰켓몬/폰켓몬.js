function solution(nums) {
    var answer = 0;
    const number = nums.length / 2;
    const map = {}

    for (let i of nums) {
        map[i] = (map[i]||0) + 1;
    }
    if (Object.keys(map).length <= number) {
        answer = Object.keys(map).length;
    } else {
        answer = number;
    }
    
    return answer;
}