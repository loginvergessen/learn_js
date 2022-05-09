/*
Title:  Matching Brackets
Link:   https://www.codeabbey.com/index/task_view/matching-brackets
*/

output(matchingBrackets(input()));

function matchingBrackets(testCases) {
    const output = [];
    const openBrackets = ['(', '[', '{', '<'];
    const closeBrackets = [')', ']', '}', '>'];
    for (let i = 0; i < testCases; i++) {
        const conditions = input()
                            .split('')
                            .filter(item => openBrackets.concat(closeBrackets).includes(item));

        if (conditions.length % 2 !== 0) {
            output.push(0);
            continue;
        }

        let bracketStack = [];
        for (const condition of conditions) {
            if (closeBrackets.includes(condition)) {
                if (bracketStack === [] || 
                    closeBrackets.indexOf(condition) !== openBrackets.indexOf(bracketStack[bracketStack.length - 1])) {
                        bracketStack = ['!'];
                        output.push(0);
                        break;
                }
                bracketStack.pop();
            }
            if (openBrackets.includes(condition)) {
                bracketStack.push(condition);
            }
        }
        if (!(bracketStack[0] === '!'))
            output.push(1);
    };
    return output.join(' ');
}