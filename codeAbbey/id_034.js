/*
Title:  Binary Search
Link:   https://www.codeabbey.com/index/task_view/binary-search
*/

output(binarySearch(input()));

function binarySearch(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const values = input()
                        .split(' ')
                        .map(str => Number(str));
        const a = values[0];
        const b = values[1];
        const c = values[2];
        const d = values[3];
        output.push((calcWithBinarySearch(a,b,c,d,0,100)));
    }
    return output.join(' ');
}

function calcWithBinarySearch(a, b, c, d, lower, upper) {
    let x = (lower + upper) / 2;
    let funcResult = (a * x + b * Math.sqrt(x**3) - c * Math.exp(-x / 50) - d).toFixed(7);

    if (funcResult > 0)      approx = calcWithBinarySearch(a, b, c, d, lower, x);
    else if (funcResult < 0) approx = calcWithBinarySearch(a, b, c, d, x, upper);
    else                     approx = x;
    return approx;
}