/*
Title:  Linear Function
Link:   https://www.codeabbey.com/index/task_view/linear-function
*/

output(linearFunction(input()));

function linearFunction(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const pointCoordinates = input()
                                    .split(' ')
                                    .map(str => Number(str));
        const x1 = pointCoordinates[0];
        const y1 = pointCoordinates[1];
        const x2 = pointCoordinates[2];
        const y2 = pointCoordinates[3];
        const a = (y2 - y1) / (x2 - x1);
        const b = y1 - a * x1;
        output.push(`(${a} ${b})`);
    }
    return output.join(' ');
}