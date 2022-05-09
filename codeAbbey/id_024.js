/*
Title:  Neumann's Random Generator
Link:   https://www.codeabbey.com/index/task_view/neumanns-random-generator
*/

output(neumannsRandomGenerator(input()));

function neumannsRandomGenerator(numberOfValues) {
    const output = [];
    const numbers = input()
                    .split(' ')
                    .map(str => Number(str));

    for (let number of numbers) {
        const sequence = [number];
        while (true) {
            number *= number;
            number = Math.floor((number / 100) % 10000);
            if (sequence.includes(number))
                break;
            sequence.push(number);
        }
        output.push(sequence.length);
    }
    return output.join(' ');
}