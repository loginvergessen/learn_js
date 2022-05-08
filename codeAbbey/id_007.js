/*
Title:  Fahrenheit to Celsius
Link:   https://www.codeabbey.com/index/task_view/fahrenheit-celsius
*/

output(fahrenheitToCelsius(input()));

function fahrenheitToCelsius(input) {
    const output = [];
    input = input.split(' ');
    input.shift();
    input
        .map(str => Number(str))
        .forEach(fahrenheit => output.push(Math.round((fahrenheit - 32) * 5 / 9)));
    return output.join(' ');
}