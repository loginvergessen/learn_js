/*
Title:  Square Root
Link:   https://www.codeabbey.com/index/task_view/square-root
*/

output(squareRoot(input()));

function squareRoot(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        const numbers = input()
                            .split(' ')
                            .map(str => Number(str));
        output.push(sqrtWithHeronsMethod(numbers[0], numbers[1]));
    };
    return output.join(' ');
}

function sqrtWithHeronsMethod(x, n, r = 1) {
    for (let i = 0; i < n; i++)
          r = (r + x / r) / 2;      
    return r;
}