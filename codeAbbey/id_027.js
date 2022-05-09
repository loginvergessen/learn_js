/*
Title:  Bubble Sort
Link:   https://www.codeabbey.com/index/task_view/bubble-sort
*/

output(bubbleSort(input()));

function bubbleSort(size) {
    const array = input()
                    .split(' ')
                    .map(str => Number(str));
    let totalSwaps = 0;
    let passes = 0;
    while (true) {
        let swaps = 0;
        array.reduce((a, b, i) => {
            if (a > b) {
                array[i-1] = b;
                array[i] = a;
                swaps++;
                return a;
            }
            return b;
        });
        passes++;
        if (!swaps)
            break;
        totalSwaps += swaps;
    }
    return `${passes} ${totalSwaps}`;
}