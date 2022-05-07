const numbers = [1 ,2, 3, 4];

function move(array, index, offset) {
    const position = index + offset;
    if (index >= array.length) {
        console.error('invalid index');
        return;
    }
    if (position >= array.length || position < 0) {
        console.error('invalid offset');
        return;
    } 

    const output = [...array];
    output.splice(position, 0, output.splice(index, 1)[0]);
    return output;
}

const output = move(numbers, 2 , 1);