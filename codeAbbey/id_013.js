/*
Title:  Weighted sum of digits
Link:   https://www.codeabbey.com/index/task_view/weighted-sum-of-digits
*/

output(weightedSumOfDigits(input()));

function weightedSumOfDigits(testCases) {
    const output = [];
    const numbers = input()
                        .split(' ');

    for (const number of numbers) {
        let sum = 0;
        let digit = number.split('');
        console.log(digit);
        for (let i = 1; i <= digit.length; i++) {
            sum += Number(digit[i-1]) * i;
        }
        output.push(sum);
    }
    return output.join(' ');
}