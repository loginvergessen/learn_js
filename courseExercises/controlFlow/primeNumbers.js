function showPrimes(limit) {
    let start = performance.now();

    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) console.log(number);
    }

    let end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor ++) {
        if (!(number % factor)) return false;
    }
    return true;
}

function countPrimes(limit) {
    let primeCounter = 0;
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) primeCounter++;
    }
    console.log(primeCounter);
}