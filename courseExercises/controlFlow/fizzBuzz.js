function fizzBuzz(i) {
    if (typeof input !== 'number') {
        return NaN;
    }

    if (!(i%5) && !(i%3)) {
        return 'FizzBuzz';
    } else if (!(i%3)) {
        return 'Fizz';
    } else if (!(i%5)) {
        return 'Buzz';
    }
    return i;
}