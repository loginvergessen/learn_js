/*
This file changes all the time and is used to test out stuff in a quick and easy way
*/

let person = {
    firstName: 'login',
    lastName: 'vergessen',
    age: 31
};

for (let key in person) {
    console.log(key, person[key]);
}

let colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}