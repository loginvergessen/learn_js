const testNumbers = [204, -55, 0, 4, -2356, 93];

const max = getMax1([]);

function getMax(array) {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (const number of array) {
        if (number > max)
            max = number;
    }
    return max;
}

function getMax1(array) {
    if (array.length === 0) return undefined;
    return array.reduce((p, c) => (p > c) ? p : c);
}