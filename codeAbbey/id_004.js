/*
Title:  Minimum of Two
Link:   https://www.codeabbey.com/index/task_view/min-of-two
*/

output(minimumOfTwo(input()));

function minimumOfTwo(pairs) {
    const output = [];
    for (let i = 0; i < pairs; i++) {
        output.push(input()
                        .split(' ')
                        .map(str => Number(str))
                        .reduce((a, b) => (a < b) ? a : b));
    }
    return output.join(' ');
}