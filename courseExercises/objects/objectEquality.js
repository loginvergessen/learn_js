function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let person1 = new Person('login', 'vergessen', 31);
let person2 = new Person('login', 'vergessen', 31);
let person3 = person2;

function areEqual(person1, person2) {
    if (Object.keys(person1).length !== Object.keys(person2).length) {
        return false;
    }
    for (let key in person1) {
        if (person1[key] !== person2[key]) {
            return false;
        }
    }
    return true;
}

function areSame(person1, person2) {
    return (person1 === person2);
}