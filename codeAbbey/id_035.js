/*
Title:  Savings Calculator
Link:   https://www.codeabbey.com/index/task_view/savings-calculator
*/

output(savingsCalculator(input()));

function savingsCalculator(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const values = input()
                        .split(' ')
                        .map(str => Number(str));
        let s = values[0];
        const r = values[1];
        const p = values[2];
        let years = 0;

        while (s < r) {
            s += calcInterest(s, p);
            years++;
        }
        output.push(years);
    }
    return output.join(' ');
}

function calcInterest(savings, rate) {
    return Number((savings * rate / 100).toFixed(2));
}