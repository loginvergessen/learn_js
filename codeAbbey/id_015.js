/*
Title:  Maximum of array
Link:   https://www.codeabbey.com/index/task_view/maximum-of-array
*/

output(maximumOfArray(input()));

function maximumOfArray(values) {
    values = values
                .split(' ')
                .map(str => Number(str));
    minimum = values.reduce((a, b) => a < b ? a : b);
    maximum = values.reduce((a, b) => a > b ? a : b);
    return `${maximum} ${minimum}`;
}