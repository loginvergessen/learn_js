/*
This file changes all the time and is used to test stuff in a quick and easy way
*/


//factory
function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
        
    }
}

const circle = new Circle(1);