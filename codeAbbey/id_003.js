/*
Title:  Sums in Loop
Link:   https://www.codeabbey.com/index/task_view/sums-in-loop
*/

output(sumsInLoop(input()));

function sumsInLoop(sumPair) {
    const output = [];
    for (let i = 0; i < sumPair; i++) {
        output.push(input()
                        .split(' ')
                        .map(str => Number(str))
                        .reduce((a, b) => a + b));
    }
    return output.join(' ');
}