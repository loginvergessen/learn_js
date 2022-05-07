const letters = ['a', 'b', 'a', 'a', 'a'];

const count = countOccurrences2(letters, 'a');

function countOccurrences(array, searchElement) {
    let counter = 0;
    for (const element of array) {
        if (element === searchElement) {
            counter++;
        }
    }
    return counter;
}

function countOccurrences2(array, searchElement) {
    return array.reduce((preVal, curVal, curIndex) => {
        if (curIndex <= 1){
            if (preVal === curVal === searchElement)
                return 2;
            if (preVal === searchElement || curVal === searchElement) 
                return 1;
            return 0;
        }
        if (curVal === searchElement)
            return preVal + 1;
        return preVal;
    });
}