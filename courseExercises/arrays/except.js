const array1 = [1,2,3,4,5,6,7,5];
const array2 = [5,7];

function except(array, excluded) {
    return array.filter(element => !excluded.includes(element));
}