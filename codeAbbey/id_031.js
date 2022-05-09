/*
Title:  Rotate String
Link:   https://www.codeabbey.com/index/task_view/rotate-string
*/

output(rotateString(input()));

function rotateString(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const values = input()
                        .split(' ');
        const k = Number(values[0]);
        let stringArray = [...values[1]];

        for (let i = 0; i < Math.abs(k); i++) {
            if (k > 0) {
                let shifted = stringArray.shift();
                stringArray.push(shifted);
            } else {
                let popped = stringArray.pop();
                stringArray.unshift(popped);
            }   
        }
        output.push(stringArray.join(''));
    }
    return output.join(' ');
}