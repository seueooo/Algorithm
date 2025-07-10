function solution(progresses, speeds) {
    var answer = [];
    let days = [];
    for (let i= 0; i<speeds.length; i++){
        let tmp = 0;
        let cnt = 0;
        tmp = progresses[i];
        while (tmp<100) {
            tmp += speeds[i];
            cnt++;
        }
        days.push(cnt);
    }
    
    let front = days[0];
    let cnt = 1;
    
    for (let i = 1; i<days.length; i++){
        if (front>=days[i]){
            cnt++;
        } else {
            answer.push(cnt);
            front = days[i];
            cnt = 1;
        }
    }
    answer.push(cnt);
    
    return answer;
}