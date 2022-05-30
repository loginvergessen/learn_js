/*
Title:  Quadratic Equation
Link:   https://www.codeabbey.com/index/task_view/quadratic-equation
*/

output(quadraticEquation(input()));

function quadraticEquation(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const values = input()
                        .split(' ')
                        .map(str => Number(str));
        const a = values[0];
        const b = values[1];
        const c = values[2];
        output.push(quadraticFormulaCalculator(a, b, c));
    }
    return output.join('; ');
}

function quadraticFormulaCalculator(a, b, c) {
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    
    if (discriminant >= 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `${x1} ${x2}`
    }
    else {
        let realPart = (-b / (2 * a)).toFixed(0);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(0);
        return `${realPart}+${imagPart}i ${realPart}-${imagPart}i`
    }
}