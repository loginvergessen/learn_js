/*
Title:  Median of Three
Link:   https://www.codeabbey.com/index/task_view/median-of-three
*/

output(medianOfThree(input()));

function medianOfThree(testCases) {

    const output = [];
    for (let i = 0; i < testCases; i++) {
        const triplets = input()
                        .split(' ')
                        .map(str => Number(str));

        output.push(getMedianOfThree(triplets));
    }
    return output.join(' ');
}

function getMedianOfThree(triplets) {
    const minIndex = triplets.indexOf(Math.min(...triplets));
    const maxIndex = triplets.indexOf(Math.max(...triplets));
    
    if (maxIndex > minIndex) {
        triplets.splice(maxIndex, 1);
        triplets.splice(minIndex, 1);
        return triplets[0];
    }
    triplets.splice(minIndex, 1);
    triplets.splice(maxIndex, 1);
    return triplets[0];
}