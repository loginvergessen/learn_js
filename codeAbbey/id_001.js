/*
Title:  Sum "A+B"
Link:   https://www.codeabbey.com/index/task_view/sum-of-two
*/

output(sumOfTwo(input()));

function sumOfTwo(input) {
    return input
            .split(' ')
            .map(str => Number(str))
            .reduce((a, b) => a + b);
}