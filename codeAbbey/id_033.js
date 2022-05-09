/*
Title:  Parity Control
Link:   https://www.codeabbey.com/index/task_view/parity-control
*/

output(parityControl(input()));

function parityControl(input) {
    const output = [];
    const message = input
                        .split(' ')
                        .map(str => Number(str));
    
    for (let symbol of message) {
        const binarySymbol = symbol
                                .toString(2)
                                .split('')
                                .map(str => Number(str));
        const binarySum = binarySymbol
                                .reduce((a, b) => a + b);

        if (binarySum % 2 !== 0)
            continue;
        if (binarySymbol.length === 8)
            symbol -= 128;
        output.push(String.fromCharCode(symbol));
    }
    return output.join('');
}