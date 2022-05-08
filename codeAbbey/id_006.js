/*
Title:  Rounding
Link:   https://www.codeabbey.com/index/task_view/rounding
*/

output(rounding(input()));

function rounding(pairs) {
    const output = [];
    for (let i = 0; i < pairs; i++) {
        output.push(input()
                        .split(' ')
                        .map(str => Number(str))
                        .reduce((a, b) => Math.round(a / b)));
    }
    return output.join(' ');
}