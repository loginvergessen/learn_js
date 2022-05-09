/*
Title:  Modular Calculator
Link:   https://www.codeabbey.com/index/task_view/modular-calculator
*/

output(modularCalculator(input()));

function modularCalculator(initialValue) {
    const instructions = [];
    do {
        let instruction = input();
        if (instruction === null) break;
        instruction = instruction.split(' ');
        instructions.push(instruction);
    } while (true);

    let mod = instructions[instructions.length - 1][1];

    for (const instruction of instructions) {
        if (instruction[0] === '+') initialValue += Number(instruction[1]);
        if (instruction[0] === '%') initialValue %= Number(instruction[1]);
        if (instruction[0] === '*') {
            initialValue *= Number(instruction[1]);
            initialValue %= mod;
        }
    }
    return initialValue;
}