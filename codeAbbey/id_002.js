/*
Title:  Sum In Loop
Link:   https://www.codeabbey.com/index/task_view/sum-in-loop
*/

output(sumInLoop(input()));

function sumInLoop(amountOfNumbers) {
    numbers = input();
    return numbers
            .split(' ')
            .map(str => Number(str))
            .reduce((a, b) => a + b);
}