/*
Title:  Array Checksum
Link:   https://www.codeabbey.com/index/task_view/array-checksum
*/

output(arrayChecksum(input()));

function arrayChecksum(length) {
    let numbers = input()
            .split(' ')
            .map(str => Number(str));
    
    numbers.unshift(0);

    return numbers.reduce((a, b) => ((a + b) * 113) % 10000007);
}