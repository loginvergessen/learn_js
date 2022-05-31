/*
Title:  Double Dice Roll
Link:   https://www.codeabbey.com/index/task_view/double-dice-roll
*/

output(doubleDiceRoll(input()));

function doubleDiceRoll(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const randomNumbers = input()
                                .split(' ')
                                .map(str => Number(str));

        const sum = convertToDicePoints(randomNumbers[0]) + convertToDicePoints(randomNumbers[1]);
        output.push(sum);
    }
    return output.join(' ');
}

function convertToDicePoints(number) {
    return (number % 6) + 1;
}