/*
This file changes all the time and is used to test stuff in a quick and easy way
*/

output(arrayCounters(input()));

function arrayCounters(initValues) {
    output = [];
    numbers = input()
                .split(' ')
                .map(str => Number(str));

    let map = new Map();

    for (const number of numbers) {
        if (!map.has(number))
            map.set(number, 1);
        map.set(number, map.get(number) + 1);
    }

    console.log(map);

    for (let i = 1; i <= map.size; i++) {
        output.push(map.get(i));
    }
    return output.join(' ');
}