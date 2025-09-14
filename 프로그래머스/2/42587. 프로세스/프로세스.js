function solution(priorities, location) {
    var answer = 0;
    let q = priorities.map((p,i)=> ({priority: p, index: i}));
    let order = 0;
    while (q.length > 0) {
        const current = q.shift();
        if (q.some(job => job.priority > current.priority)) {
            q.push(current);
        } else {
            order++;
            if (current.index === location) {
                return order;
            }
        }
    }
    answer = order;
    return answer;
}

