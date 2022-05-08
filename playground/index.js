/*
This file changes all the time and is used to test stuff in a quick and easy way
*/


let person = {
    firstName: 'login',
    lastName: 'vergessen',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string!');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a frist an last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};


try {
    person.fullName = '';
}
catch (e) {
    alert(e);
}

console.log(person.fullName);