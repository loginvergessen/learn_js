/*
This file changes all the time and is used to test stuff in a quick and easy way
*/

test(2096);

function test(number) {

    sum = 0;

    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    console.log(number);
    console.log(sum);

}