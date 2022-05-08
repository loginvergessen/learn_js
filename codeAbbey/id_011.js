/*
Title:  Sum of digits
Link:   https://www.codeabbey.com/index/task_view/linear-function
*/

output(sumOfDigits(input()));

function sumOfDigits(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        let number = input()
                        .split(' ')
                        .map(str => Number(str));
        number = number[0] * number[1] + number[2];
        let sum = 0;
        while (number) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        output.push(sum)
    }
    return output.join(' ');
}