/*
Title:  Linear Congruential Generator
Link:   https://www.codeabbey.com/index/task_view/linear-congruential-generator
*/

output(linearCongruentialGenerator(input()));

function linearCongruentialGenerator(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const values = input()
                        .split(' ')
                        .map(str => Number(str));
        const a = values[0];
        const c = values[1];
        const m = values[2];
        const n = values[4];
        let x = values[3];
        for (let i = 0; i < n; i++) {
            x = (a * x + c) % m;
        }
        output.push(x);
    }
    return output.join(' ');
}