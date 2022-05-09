/*
Title:  Code Guesser
Link:   https://www.codeabbey.com/index/task_view/code-guesser
*/

output(codeGuesser(input()));

function codeGuesser(guesses) {
    const guessArray = [];
    const answerArray = [];
    let firstDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let secondDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let thirdDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let fourthDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < guesses; i++) {
        const values = input()
                        .split(' ');
        guessArray.push(values[0].split(''));
        answerArray.push(Number(values[1]));
    }

    // easy filter all with answer 0
    for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] === 0) {
            firstDigit = firstDigit.filter(v => v !== Number(guessArray[i][3]));
            secondDigit = secondDigit.filter(v => v !== Number(guessArray[i][2]));
            thirdDigit = thirdDigit.filter(v => v !== Number(guessArray[i][1]));
            fourthDigit = fourthDigit.filter(v => v !== Number(guessArray[i][0]));
        }
    }

    // create all possibilities with remainding digits
    const possibilities = [];
    for (let d4 = 0; d4 < fourthDigit.length; d4++) {
        for (let d3 = 0; d3 < thirdDigit.length; d3++) {
            for (let d2 = 0; d2 < secondDigit.length; d2++) {
                for (let d1 = 0; d1 < firstDigit.length; d1++) {
                    possibilities.push(fourthDigit[d4].toString() + thirdDigit[d3].toString() + secondDigit[d2].toString() + firstDigit[d1].toString());
                }
            }
        }
    }

    let answers = [];
    for (let j = 0; j < answerArray.length; j++) {
        if (answerArray[j] > 0) {
            for (let i = possibilities.length - 1; i >= 0; i--) {
                let count = 0;
                for (let digit = 0; digit < 4; digit++) {
                    if (guessArray[j][digit] === possibilities[i].split('')[digit])
                        count++;
                }
                if (count === answerArray[j])
                    answers.push(possibilities[i]);
            }
        }
    }

    for (const answer of answers) {
        if (countOccurrences2(answers, answer) === 3)
            return answer;
    }
}


function countOccurrences2(array, searchElement) {
    return array.reduce((preVal, curVal, curIndex) => {
        if (curIndex <= 1){
            if (preVal === curVal === searchElement)
                return 2;
            if (preVal === searchElement || curVal === searchElement) 
                return 1;
            return 0;
        }
        if (curVal === searchElement)
            return preVal + 1;
        return preVal;
    });
}