/*
Title:  Bubble in Array
Link:   https://www.codeabbey.com/index/task_view/bubble-in-array
*/

output(bubbleInArray(input()));

function bubbleInArray(array) {
    const numbers = array
                    .split(' ')
                    .map(str => Number(str));
    numbers.pop();
    let swaps = 0;
    numbers.reduce((a, b, i) => {
        if (a > b) {
            numbers[i-1] = b;
            numbers[i] = a;
            swaps++;
            return a;
        }
        return b;
    });
    numbers.unshift(0);
    checksum = numbers.reduce((a, b) => ((a + b) * 113) % 10000007);
    return `${swaps} ${checksum}`;
}