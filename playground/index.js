/*
This file changes all the time and is used to test stuff in a quick and easy way
*/

codeGuesser(9);

function codeGuesser(guesses) {
    //const guessArray = ['9699','3185','7127','4914','9741','9117','2319','5203','5334'];
    //const answerArray = [0,2,0,0,0,0,0,2,1];

    let firstDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let secondDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let thirdDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const guessArray = ['402','390','816','848','777','815'];
    const answerArray = [0,0,2,2,0,1];
    
    for (let i = 0; i < answerArray.length; i++) {
        if (answerArray[i] === 0) {
            firstDigit = firstDigit.filter(v => v !== Number(guessArray[i].split('')[2]));
            secondDigit = secondDigit.filter(v => v !== Number(guessArray[i].split('')[1]));
            thirdDigit = thirdDigit.filter(v => v !== Number(guessArray[i].split('')[0]));
        }
    }

    let possibilities = [];
    for (let d3 = 0; d3 < thirdDigit.length; d3++) {
        for (let d2 = 0; d2 < secondDigit.length; d2++) {
            for (let d1 = 0; d1 < firstDigit.length; d1++) {
                possibilities.push(thirdDigit[d3].toString() + secondDigit[d2].toString() + firstDigit[d1].toString());
            }
        }
    }

    console.log(possibilities);

//    // create all 10'000 possibilities
//    let possibilities = [];
//    for (let i = 0; i < 10; i++) {
//        for (let j = 0; j < 10; j++) {
//            for (let k = 0; k < 10; k++) {
//                //for (let l = 0; l < 10; l++) {          
//                    possibilities.push(i.toString() + j.toString() + k.toString() /*+ l.toString() */);
//                //}
//            }
//        }
//    }

    let tests = [];

    for (let j = 0; j < answerArray.length; j++) {
        if (answerArray[j] > 0) {
            for (let i = possibilities.length - 1; i >= 0; i--) {

                let count = 0;

                for (let digit = 0; digit < 3; digit++) {
                    if (guessArray[j].split('')[digit] === possibilities[i].split('')[digit])
                        count++;
                }

                if (count === answerArray[j])
                    tests.push(possibilities[i]);
            }
        }
    }

    console.log(tests);

    for (const test of tests) {
        if (countOccurrences2(tests, test) === 3)
            console.log(test);
    }

//    for (let j = 0; j < answerArray.length; j++) {
//        if (answerArray[j] > 0) {
//            for (let i = possibilities.length - 1; i >= 0; i--) {
//
//                let count = 0;
//
//                for (let digit = 0; digit < 4; digit++) {
//
//                    if (possibilities[i] === undefined)
//                        continue;
//
//                    if (guessArray[j].split('')[digit] === possibilities[i].split('')[digit])
//                        count++;
//                }
//
//                if (count !== answerArray[j])
//                    possibilities = possibilities.slice(i, 1);
//            }
//        }
//    }

    console.log(possibilities);

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