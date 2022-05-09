/*
Title:  Mortgage Calculator
Link:   https://www.codeabbey.com/index/task_view/mortgage-calculator
*/

output(mortgageCalculator(input()));

function mortgageCalculator(input) {
    const MONTHS_IN_YEAR = 12;
    const values = input
                        .split(' ')
                        .map(str => Number(str));
    const principal = values[0];
    const anualRate = values[1];
    const payments = values[2];
    const monthlyRate = anualRate / 100 / MONTHS_IN_YEAR;

    return Math.ceil(principal * (monthlyRate * Math.pow(1 + monthlyRate, payments) / (Math.pow(1 + monthlyRate, payments) - 1)));
}