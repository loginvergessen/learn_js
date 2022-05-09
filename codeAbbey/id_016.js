/*
Title:  Average of an array
Link:   https://www.codeabbey.com/index/task_view/average-of-array
*/

output(averageOfAnArray(input()));

function averageOfAnArray(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const array = input()
                    .split(' ')
                    .map(str => Number(str));
        array.pop();
        let sum = array.reduce((a, b) => a + b);
        output.push(Math.round(sum / array.length));
    }
    return output.join(' ');
}