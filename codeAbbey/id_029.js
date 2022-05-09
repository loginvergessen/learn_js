/*
Title:  Sort with Indexes
Link:   https://www.codeabbey.com/index/task_view/sort-with-indexes
*/

output(sortWithIndexes(input()));

function sortWithIndexes(size) {
    const array = input()
                    .split(' ')
                    .map(str => Number(str));
    
    const indexArray = [];
    const sortedArray = [...array].sort((a, b) => a - b);

    for (const number of sortedArray) {
        indexArray.push(array.indexOf(number) + 1);
    }
    return indexArray.join(' ');
}