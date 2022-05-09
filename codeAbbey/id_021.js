/*
Title:  Array Counters
Link:   https://www.codeabbey.com/index/task_view/array-counters
*/

output(arrayCounters(input()));

function arrayCounters(initValues) {
    const output = [];
    numbers = input()
                .split(' ')
                .map(str => Number(str));

    let map = new Map();

    for (const number of numbers) {
        if (!map.has(number)) {
            map.set(number, 1);
            continue;
        }
        map.set(number, map.get(number) + 1);
    }

    for (let i = 1; i <= map.size; i++) {
        output.push(map.get(i));
    }
    return output.join(' ');
}