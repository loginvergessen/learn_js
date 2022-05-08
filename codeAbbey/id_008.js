/*
Title:  Arithmetic Progression
Link:   https://www.codeabbey.com/index/task_view/arithmetic-progression
*/

output(arithmeticProgression(input()));

function arithmeticProgression(testCases) {
    const output = [];
    for (let i = 0; i < testCases; i++) {
        let result = 0;
        const numbers = input()
                            .split(' ')
                            .map(str => Number(str));
        for (let j = 0; j < numbers[2]; j++) {
            result += numbers[0] + numbers[1] * j;       
        }
        output.push(result);
    }
    return output.join(' ');
}