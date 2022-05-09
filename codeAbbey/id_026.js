/*
Title:  Greatest Common Divisor
Link:   https://www.codeabbey.com/index/task_view/greatest-common-divisor
*/

output(greatestCommonDivisor(input()));

function greatestCommonDivisor(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const values = input()
                        .split(' ')
                        .map(str => Number(str));
        const a = values[0];
        const b = values[1];        
        const gcd = calcGSD(a, b);
        const lcm = calcLCM(a, b, gcd);
        output.push(`(${gcd} ${lcm})`);
    }
    return output.join(' ');
}

function calcGSD(a, b) {
    while (a !== b) {
        if (a > b)  a -= b;
        else        b -= a;
    }
    return a;
}

function calcLCM(a, b, gcd) {
    return a * b / gcd;
}