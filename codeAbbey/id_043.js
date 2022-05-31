/*
Title:  Dice Rolling
Link:   https://www.codeabbey.com/index/task_view/dice-rolling
*/

output(diceRolling(input()));

function diceRolling(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const randomNumber = [input()]
                                .map(str => Number(str));

        output.push(Math.floor(randomNumber * 6) + 1);
    }
    return output.join(' ');
}