/*
Title:  Body Mass Index
Link:   https://www.codeabbey.com/index/task_view/body-mass-index
*/

output(bodyMassIndex(input()));

function bodyMassIndex(testCases) {
    const output = [];

    for (let i = 0; i < testCases; i++) {
        const data = input()
                    .split(' ')
                    .map(str => Number(str));

        const bmi = new Bmi(data[0], data[1]);
        output.push(bmi.grade());
    }
    return output.join(' ');
}

function Bmi(weight, height) {
    this.weigth = weight;
    this.height = height;
    this.bmi = weight / Math.pow(height, 2);

    this.grade = function() {
        if (this.bmi < 18.5)
            return 'under'
        if (this.bmi < 25)
            return 'normal'
        if (this.bmi < 30)
            return 'over'
        return 'obese'
    };
}