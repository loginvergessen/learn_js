function countTruthy(array) {
    let counter = 0;
    for (const element of array) {
        if (element) {
            counter++;
        }
    }
    return counter
}