// copy of countOccurrences.js in courseExercises/arrays/
try {
    const count = countOccurrences([1,2,3,4,1], 1)
}
catch (e) {
    alert(e);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('input was not an array');
    if (array.length === 0)
        throw new Error('array is empty');

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