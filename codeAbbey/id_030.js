/*
Title:  Reverse String
Link:   https://www.codeabbey.com/index/task_view/reverse-string
*/

output(reverseString(input()));

function reverseString(string) {
    const symbols = string
                    .split('');

    for (let i = 0; i < Math.floor(symbols.length / 2); i++) {
        let tmp = symbols[i];
        symbols[i] = symbols[symbols.length - 1 - i];
        symbols[symbols.length - 1 - i] = tmp;
    }
    return symbols.join('');
}