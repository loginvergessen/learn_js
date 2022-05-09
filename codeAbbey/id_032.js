/*
Title:  Josephus Problem
Link:   https://www.codeabbey.com/index/task_view/josephus-problem
*/

output(josephusProblem(input()));

function josephusProblem(input) {
    const values = input
                        .split(' ')
                        .map(str => Number(str));
    
    const n = values[0];
    const k = values[1];

    return calcRecursive(n, k);
}

function calcRecursive(n, interval) {
    return (n > 1 ? (calcRecursive(n - 1, interval) + interval - 1) % n + 1 : 1);
}