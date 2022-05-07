function sum(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        if (!(i%3)) {
            sum += i;
        }
        if (!(i%5)) {
            sum += i;
        }
    }
    return sum;
}