function sum(...numbers) {
    return numbers
        .flat()
        .reduce((a, b) => a + b);
}