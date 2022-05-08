/*
Title:  Minimum of Three
Link:   https://www.codeabbey.com/index/task_view/min-of-three
*/

output(minimumOfThree(input()));

function minimumOfThree(triplets) {
    const output = [];
    for (let i = 0; i < triplets; i++) {
        output.push(Math.min(...input()
                        .split(' ')
                        .map(str => Number(str))));
    }
    return output.join(' ');
}